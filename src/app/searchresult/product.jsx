"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { RingLoader } from "react-spinners";
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { MainProductRender } from "../../context/MainProduct";


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

const searchparams = useSearchParams();
const searchText = searchparams.get("search")?.toLowerCase() || "";
const {category} = MainProductRender()



const [open,setopen] = useState(false)
const [selected,setselected] = useState("Deafult")
const sizeoption = [
"Deafult",
"Name, A To Z",
"Name, Z To A",
"Price, Low To High",
"Price, High To Low",
]
const handleselect = (value) => {
    setselected(value)
    setopen(false)
}






const [categoryFilter, setCategoryFilter] = useState([]);
const [categoopen, setcategoropen] = useState(false)
const catetitleckbox = [
    "Fashion",
    "Electronics",
    "Bag",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery"
]
const handleCategoryFilter  = (cat) => {
  setCategoryFilter((prev)=> 
   prev.includes(cat)
  ? prev.filter((r)=> r !== cat)
  : [...prev, cat]
  )
}









 const [value, setValue] = useState([0, 3500]);
const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  const [rating, setRating] = useState([])
  const RatingStar = [
    "⭐⭐⭐⭐⭐",
    "⭐⭐⭐⭐☆",
    "⭐⭐⭐☆☆",
    "⭐⭐ ☆ ☆ ☆",
    "⭐ ☆ ☆ ☆ ☆",
]
const handleRating = (r) => {
  setRating((prev)=> 
  prev.includes(rating)
  ? prev.filter((x)=> x !== r)
  : [...prev , r]
)}




const [loading, setLoading] = useState(false);
 const handleLoading = (id) => {
  setLoading(true);
  setTimeout(() => setLoading(false), 300);
};





const [data, setData] = useState([])
const [filterData, setFilterData] = useState([]);


useEffect(()=>{
  if (!category) return; 
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





 const allProducts = [
    ...Fashion,
    ...FashionMan,
    ...FashionWomen,
    ...Electronics,
    ...Laptops,
    ...Mobile,
    ...TV,
    ...Bag,
    ...BagMen,
    ...WomenBags,
    ...Footwear,
    ...FootwearMen,
    ...WomensFootwear,
    ...Groceries,
    ...Beauty,
    ...Wellness,
    ...Jewellery,
  ];

 






useEffect(()=> {
let temp = searchText ? [...allProducts] : [...data]


if(searchText){
 temp = temp.filter(
      (item) => 
      item.catetitle?.toLowerCase().includes(searchText) ||
      item.name?.toLowerCase().includes(searchText) ||
      item.category?.toLowerCase().includes(searchText)  
  )}
  



  if(categoryFilter.length > 0){
let allcategoriesdata = [];
categoryFilter.forEach(cat => {
  switch(cat){
    case "Fashion" : allcategoriesdata = [...allcategoriesdata, ...Fashion]; break;
    case "Electronics" : allcategoriesdata = [...allcategoriesdata, ...Electronics]; break;
    case "Bag" : allcategoriesdata = [...allcategoriesdata, ...Bag]; break;
    case "Footwear" : allcategoriesdata = [...allcategoriesdata, ...Footwear]; break;
    case "Groceries" : allcategoriesdata = [...allcategoriesdata, ...Groceries]; break;
    case "Beauty" : allcategoriesdata = [...allcategoriesdata, ...Beauty]; break;
    case "Wellness" : allcategoriesdata = [...allcategoriesdata, ...Wellness]; break;
    case "Jewellery" : allcategoriesdata = [...allcategoriesdata, ...Jewellery]; break;
  }
});
temp = Array.from(new Set(allcategoriesdata))
}








  temp = temp.filter(i=> {
    const itemprics = Number(i.price.replace(/[^0-9.-]+/g, ""))
    return itemprics >= value[0] && itemprics <= value[1]
  })



  if(rating.length > 0){
    temp = temp.filter((i)=>
    rating.includes(i.ratestar.toString())
    )}



if(selected === "Name, A To Z"){
  temp.sort((a,b)=> a.name.localeCompare(b.name))
};

if(selected === "Name, Z To A"){
  temp.sort((a,b)=> b.name.localeCompare(a.name))
};

if(selected === "Price, Low To High"){
 temp.sort((a,b) => {
      const priceA = Number(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = Number(b.price.replace(/[^0-9.-]+/g, ""));
      return priceA - priceB;
    });
};

if(selected === "Price, High To Low"){
 temp.sort((a,b) => {
      const priceA = Number(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = Number(b.price.replace(/[^0-9.-]+/g, ""));
      return priceB - priceA;
    });
};



setFilterData(temp)
},[data,categoryFilter,selected,searchText,rating,value])









return(
   <div className="pt-30 lg:pt-40 w-full bg-white" style={{ userSelect: "none" }}>


{/* Loader */}
{loading && (
  <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
    <RingLoader color="#010002ff" />
  </div>
)}
{/* Loader */}
   

{/* full box */}
<div className="flex w-full">

{/* left side box  */}
<div className="hidden overflow-x-hidden lg:block w-1/4 h-screen sticky top-40 p-5 overflow-y-auto border-r">

{/* filter box */}
<div className="flex flex-col gap-5">

{/* categoory filter  */}
<div>
  <div className="flex pb-5 items-center cursor-pointer justify-between"
    onClick={() => setcategoropen(!categoopen)}>
<div className="font-semibold">Shop By catetitle</div>
<div>
  {categoopen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
</div>
  </div>

<div className={`overflow-scroll h-40 transition-all duration-1000 ease-in-out
        ${categoopen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="flex flex-col gap-1 text-gray-500 text-[15px] p-1">
        {catetitleckbox.map((item, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox" 
             onChange={()=> handleCategoryFilter(item)}
              className="w-4 h-4 accent-orange-500"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
</div>
{/* categoory filter  */}

{/* Price Filter */}
<div className="">
  <p className="font-semibold">Filter By Price</p>
  <div className="pt-2">
    <Box sx={{ color: "red" }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={3500}
        className="text-red-500"
      />
    </Box>
    <div className="flex justify-between text-[10px]">
      <p>From: <b>Rs: ${value[0]}</b></p>
      <p>To: <b>Rs: ${value[1]}</b></p>
    </div>
  </div>
</div>
{/* Price Filter */}

{/* Rating Filter */}
 <div className="pt-3">
  <p className="font-semibold">Filter By Rating</p>
  <div className="flex flex-col gap-3 pt-3 text-gray-500 text-[15px] p-1">
    {RatingStar.map((item, index) => (
      <label key={index} className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox"
        onChange={()=> handleRating(item)}
        className="w-4 h-4 accent-orange-500" />
        <span>{item}</span>
      </label>
    ))}
  </div>
</div>
{/* Rating Filter */}

</div>
{/* filter box */}

</div>
{/* left side box  */}



{/* right box */}
<div className="w-full lg:w-3/4 flex flex-col p-2">

{/* header  */}
<div className="sticky top-25 lg:top-35 z-20 bg-gray-200  text-black rounded-lg shadow-md p-3 mb-3">
 <div className="flex justify-between items-center">

{/* left header  */}
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
        There Are {filterData.length > 0 ? filterData.length : data.length} Products
    </p>
</div>
{/* left header  */}

{/* right header  */}
<div className="flex gap-2 items-center ">
    <p>Sort By </p>
    <div>
    <div className="relative inline-block text-black">
<div className="px-3 py-2 w-35 bg-white font-semibold text-[13px] rounded-md cursor-pointer shadow"
onClick={()=> setopen(!open)}>
<p>{selected}</p>
</div>

{open && (
<div className="absolute mt-1 w-35 text-[11px] bg-white  rounded-md shadow-lg z-20">
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
{/* right header  */}

 </div>
</div>
{/* header  */}



{/* product  */}
<div className="scroll-area p-3">

<div className="grid md:grid-cols-4 grid-cols-2 xl:grid-cols-5 gap-3">
 
 {(filterData.length > 0 ? filterData : data).map((item, index) => (
  <div
   key={`${item.id}-${index}`}
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
       <div className="text-gray-400 text-[10px]">{item.catetitle}</div>
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
{/* product  */}



</div>
{/* right box */}


</div>
{/* full box */}



</div>
)

}