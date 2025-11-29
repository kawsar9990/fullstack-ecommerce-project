"use client";

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { RingLoader } from "react-spinners";

import { ChevronDown, ChevronUp } from "lucide-react"

import { MainProductRender } from "../../context/MainProduct";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


// data 
import { Fashion } from "../../content/All/allFashion";
import { FashionMan } from "../../content/All/FashionMan";
import { FashionWomen } from "../../content/All/FashionWomen";
import { Electronics } from "../../content/All/allelectronics";
import { Laptops } from "../../content/All/Leptop";
import { Mobile } from "../../content/All/Mobiles";
import { TV } from "../../content/All/ElectronicsOther";
import { Bag } from "../../content/All/allbags";
import { BagMen } from "../../content/All/BagsMen";
import { WomenBags } from "../../content/All/BagsWomen";
import { Footwear } from "../../content/All/allFootwear";
import { FootwearMen } from "../../content/All/FootwearMen";
import { WomensFootwear } from "../../content/All/FootwearWomen";
import { Groceries } from "../../content/All/allGroceries";
import { Beauty } from "../../content/All/allbeauty";
import { Wellness } from "../../content/All/allWellness";
import { Jewellery } from "../../content/All/allJewellery";

export default function Page(){

const [open,setopen] = useState(false)
const [selected,setselected] = useState("Name, A To Z")



const sizeoption = [
"Name, A To Z",
"Name, Z To A",
"Price, Low To High",
"Price, High To Low",
]

const handleselect = (value) => {
    setselected(value)
    setopen(false)
}


const [categoopen, setcategoropen] = useState(false)

const categoryckbox = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery"
]

function valuetext(value) {
  return `${value}°C`;
}


 const [value, setValue] = useState([20, 37]);
const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const RatingStar = [
    "⭐⭐⭐⭐⭐",
    "⭐⭐⭐⭐☆",
    "⭐⭐⭐☆☆",
    "⭐⭐ ☆ ☆ ☆",
    "⭐ ☆ ☆ ☆ ☆",
]


    const [loading, setLoading] = useState(false);
   


    const handleLoading = (id) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };



const [data, setData] = useState([])
const { category } = MainProductRender();


useEffect(()=>{
  console.log("category:", Fashion)
  switch (category) {
    case "Fashion":
      setData(Fashion);
      break;
      case "FashionWomen":
      setData(FashionWomen);
      break;
      case "FashionMan":
      setData(FashionMan);
      break;
      case "Electronics":
      setData(Electronics);
      break;
      case "Mobile":
      setData(Mobile);
      break;
      case "Laptops":
      setData(Laptops);
      break;
      case "TV":
      setData(TV);
      break;
      case "Bag":
      setData(Bag);
      break;
      case "BagMen":
      setData(BagMen);
      break;
      case "WomenBags":
      setData(WomenBags);
      break;
      case "Footwear":
      setData(Footwear);
      break;
      case "FootwearMen":
      setData(FootwearMen);
      break;
      case "WomensFootwear":
      setData(WomensFootwear);
      break;
      case "Groceries":
      setData(Groceries);
      break;
      case "Beauty":
      setData(Beauty);
      break;
      case "Wellness":
      setData(Wellness);
      break;
      case "Jewellery":
      setData(Jewellery);
      break;

      default:
        setData([]);
  }
},[category])


// search filter 
const searchfilter = useSearchParams();
const searchQueary = searchfilter.get("search")?.toLowerCase() || "";
const [fillterData, setFillterData] = useState([]);

useEffect(()=> {
  const allproductfilltersearch = [
    ...Fashion, ...Electronics, ...FashionMan, ...FashionWomen, ...Mobile, ...Laptops,
    ...TV, ...Bag, ...Footwear, ...Groceries, ...Beauty, ...Wellness, ...Jewellery
  ];
  setData(allproductfilltersearch)
},[])

useEffect(()=> {
  if(searchQueary){
    const fillter = data.filter(item => 
      item.name.toLowerCase().includes(searchQueary) ||
      item.category.toLowerCase().includes(searchQueary)
    )
    setFillterData(fillter)
  }
  else{
    setFillterData(data)
  }
},[searchQueary, data])


    return(
        <div className="pt-30 lg:pt-40 w-full bg-white" style={{userSelect: "none"}}>
            
{loading && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
          <RingLoader color="#010002ff" />
        </div>
      )}



<div className="lg:flex flex-row items-start p-3">



{/* fillter box */}
<div className="hidden lg:flex lg:flex-col lg:gap-3 lg:w-1/3 p-5">

{/* checkbox */}
<div className="w-full">

<div className="flex pb-5 items-center cursor-pointer justify-between w-full" 
onClick={()=> setcategoropen(!categoopen)}>
    <div className="font-semibold">Shop By Category</div>
    <div>{categoopen ? (<ChevronUp className="w-5 h-5" />) : ( <ChevronDown className="w-5 h-5" />)}</div>
</div>

   <div
      className={`overflow-scroll h-40 transition-all duration-1000 ease-in-out
        ${categoopen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="flex flex-col gap-1 text-gray-500 text-[15px] p-1">
        {categoryckbox.map((item, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-orange-700"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
</div>
{/* checkbox */}




{/* price range */}
<div>
<p className="font-semibold">Filter By Price</p>
<div className="pt-2">
<Box sx={{ color: "red"}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        className="text-red-500"
      />
    </Box>

<div>
<div className="flex justify-between text-[10px]">
  <p>From: <b>Rs: {2500000}</b></p>
  <p>From: <b>Rs: {250000}</b></p>
</div>
</div>
</div>
</div>
{/* price range */}


{/* rating */}
<div className="flex flex-col gap-3">
<p className="font-semibold">Filter By Rating</p>
<div>
<div className="flex flex-col gap-1 text-gray-500 text-[15px] p-1">
        {RatingStar.map((item, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-orange-700"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
</div>
</div>
{/* rating */}


</div>
{/* fillter box */}




{/* box  */}
<div className="lg:w-4/3 w-full">



{/* header  */}
<div className="mb-5 lg:p-2 rounded-lg">
<div className="bg-gray-200 justify-between rounded-lg items-center w-full shadow-lg p-3 flex flex-row text-black">
  
  {/* left */}
<div className="flex gap-2 items-center ">
    <p className="hover:text-red-500 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
    </p>
    <p className="hover:text-red-500 cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
    </p>
    <p className="hidden md:flex">
        There Are {category} Products
    </p>
</div>
{/* left */}

{/* right  */}
<div className="flex gap-2 items-center ">
    <p>Sort By </p>
    <div>
    <div className="relative inline-block text-black">
<div className="px-3 py-2 bg-white font-semibold text-[13px] rounded-md cursor-pointer shadow"
onClick={()=> setopen(!open)}>
<p>{selected}</p>
</div>

{open && (
<div className="absolute mt-1 text-[11px] bg-white  rounded-md shadow-lg z-20">
{sizeoption.map((i)=> (
  <p
key={i}
className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
onClick={() => handleselect(i)}
>
{i}
</p>  
))}
</div>
)}
    </div>
    </div>
</div>
{/* right  */}

</div>
</div>
{/* header  */}


{/* card  */}
<div>


 <div className="grid md:grid-cols-4 grid-cols-2 xl:grid-cols-5 gap-3">

{fillterData.map(item => (
  <div
   key={item.id}
   className="group mb-5 rounded-lg cursor-pointer shadow-lg flex flex-col justify-between"
 >
   <div>
     <div className="overflow-hidden relative">
      <Image
   src={item.image}
   alt={item.name}
   width={300}
   height={200}
   className="w-full h-[180px] object-cover rounded transition-all duration-500 group-hover:scale-110"
 />
 
 
       <div className="absolute text-white top-1 left-1 rounded-lg font-bold p-1 bg-red-600">
         {item.discountPercent}
       </div>
     </div>
 
  
   
     <div className="p-2 flex flex-col gap-1 flex-grow">
       <div className="text-gray-400 text-[10px]">{item.category}</div>
       <div className="text-black text-[12px] line-clamp-2 h-[32px]">
         {item.name}
       </div>
       <div className="text-[13px]">{item.ratestar}</div>
       <div className="flex items-center justify-between">
         <p className="line-through text-gray-400">{item.oldprice}</p>
         <p className="text-red-600 font-semibold">{item.price}</p>
       </div>
     </div>
  
   </div>
 
   <div className="p-2 mb-2">
     <button onClick={()=> handleLoading(item.id)} className="bg-transparent outline-2 text-center rounded-md hover:bg-black hover:text-white hover:outline-0 text-red-500 cursor-pointer outline-red-600  p-1 w-full">
       <Link href={``} className="flex flex-row gap-3 justify-center">
         <p>
           <FontAwesomeIcon icon={faCartShopping} />
         </p>
         <p>Add To Cart</p>
       </Link>
     </button>
   </div>
 </div>
 ))}
 


 </div>
</div>
{/* card  */}


</div>
{/* box  */}


</div>




        </div>
    )
}