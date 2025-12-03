'use client'
import Link from "next/link"


import { MainProductRender } from "../context/MainProduct"

import { motion, AnimatePresence } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping, faBars, faBarsStaggered, faChevronDown, faHeart, faHouse, faMagnifyingGlass, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"

library.add(faBarsStaggered,faChevronDown,faBars,faXmark,faHouse,faMagnifyingGlass,faBagShopping,faUser, faHeart)

import { useState, useRef } from "react"

import { useRouter } from "next/navigation"

export default function Header(){

   const [sidebarcl, setsidebarcl] = useState(false)
   const [sideDropdown, setsideDropdown] = useState(null);




    const [FashionOpen, setFashionOpen] = useState(false);
    const fashionTimer = useRef(null);

    const [ElecOpen, setElecOpen] = useState(false);
    const ElectronicsTimer = useRef(null);

    const [BagOpen, setBagOpen] = useState(false);
    const BagsTimer = useRef(null);

    const [footOpen, setfootOpen] = useState(false);
    const FootwearTimer = useRef(null);





    const toggleDropdown = (menu) => {
    if (sideDropdown === menu) {
      setsideDropdown(null);
      } else{
        setsideDropdown(menu)
      }
    }
   
    const {setCategory} = MainProductRender();

    const [text,setText]= useState("")
    const router = useRouter();
    const handleSearch = (e) => {
      e.preventDefault();
      if(!text.trim()) return;

      router.push(`/searchresult?search=${text}`)
    }
  
    return(

        <div className="antialiased z-[9999]" style={{userSelect: "none"}}>
            
{/* main box  */}
<div>




{/* dekstop  header */}
<div className="fixed hidden xl:flex xl:flex-col top-0 left-0 right-0  z-100 w-full shadow-md bg-white">


{/* dekstop searbarnav */}
<div className={`w-full transition-all duration-300  bg-white`}>
<div className="flex p-3 w-full  bg-white justify-between items-center">

    <div>
        <p className="font-black text-2xl">
            <Link href={`/`} className=" font-black" style={{fontFamily: "Poppins"}}>
            KAWSARSHOP
            </Link>
        </p>
    </div>

    <div className="w-full">
        <form className="max-w-md mx-auto"  onSubmit={handleSearch}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
 <path
  strokeLinecap="round" strokeLinejoin="round" d="M10.5 3a7.5 7.5 0 015.93 12.11l4.2 4.2a1 1 0 01-1.41 1.41l-4.2-4.2A7.5 7.5 0 1110.5 3z"
/>
</svg>
        </div>
        <input type="search" id="default-search" value={text} onChange={(e)=> setText(e.target.value)} className="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-200  text-black focus:outline-0" placeholder="Search For Products...." required />
        <button type="submit" className="text-white absolute cursor-pointer end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
    </div>
</form>
    </div>

    <div className="flex justify-between gap-3">
        <Link href={`/login`} className="font-bold hover:text-red-500 text-gray-500">Login</Link>
        <p> | </p>
        <Link href={`/register`} className="font-bold hover:text-red-500 text-gray-500">Register</Link>
        <Link href={``} className="text-gray-500 hover:text-red-500 font-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </Link>
        <Link href={``} className="text-gray-500 hover:text-red-500 font-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
        </Link>
    </div>

</div>
</div>
<hr className="text-gray-300"/>
{/* dekstop searbarnav */}






{/* dekstop main header  */}
<div className="px-5">
<div className="flex justify-between items-center">

<div className="cursor-pointer hover:bg-gray-200">
    <button onClick={()=> setsidebarcl(!sidebarcl)} className="cursor-pointer flex items-center gap-3 p-2 transition-all duration-300">
        <FontAwesomeIcon icon={faBarsStaggered} />
        <div className="font-semibold text-[15px]">
            <p>SHOP BY</p>
            <p>CATEGORIES</p>
        </div>
        <FontAwesomeIcon icon={faChevronDown} />
    </button>
</div>





 <AnimatePresence>
      {sidebarcl && (
        <motion.div 
         initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring",  damping: 20 }}
         onClick={(e)=> {
          if(e.target === e.currentTarget){
            setsidebarcl(false)
            setsideDropdown(null)
          }
        }}
        className=" fixed inset-0 z-[9999] transition-opacity duration-300">
            <div className={`flex flex-col fixed left-0 top-0 h-full bg-white w-56 md:w-80
                transform transition-transform duration-300 ${sidebarcl ? "translate-x-0" : "-translate-x-full"} `}>
                <p className="md:text-[20px] p-2 font-black text-[20px]">KAWSARSHOP</p>
                <div className="flex p-2 items-center justify-between">
                    <p className="text-[17px] font-semibold">Shop By Categories</p>
                    <FontAwesomeIcon icon={faXmark} className="cursor-pointer" onClick={()=> {setsidebarcl(false); setsideDropdown(null)}}/>
                </div>


<div className="flex flex-col">
<div className="flex flex-col justify-between p-2 gap-3">


<ul className="flex flex-col gap-4 font-semibold mt-3">





<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("fashion")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Fashion")}>Fashion</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "fashion" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "fashion" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("FashionWomen")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Women</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("FashionMan")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Men</Link>
          </div>
        )}

</li>








<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("electro")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Electronics")}>Electronics</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "electro" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "electro" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("Mobile")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Mobile</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("Laptops")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Leptop</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("TV")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Smart Watch</Link>
          </div>
        )}

</li>









<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("bag")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Bag")}>Bags</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "bag" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "bag" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("BagMen")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Men Bags</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("WomenBags")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Women Bags</Link>
          </div>
        )}

</li>





<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("footw")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Footwear")}>Footwear</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "footw" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "footw" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("FootwearMen")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Men Footwear</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("WomensFootwear")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Women Footwear</Link>
          </div>
        )}

</li>




<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Groceries")}>Groceries</Link>
  <div className="w-5 h-5 flex items-center justify-center  border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>




<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Beauty")}>Beauty</Link>
  <div className="w-5 h-5 flex items-center justify-center  border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>








<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Wellness")}>Wellness</Link>
  <div className="w-5 h-5 flex items-center justify-center  border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>






<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Jewellery")}>Jewellery</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>



<button className="cursor-pointer hover:bg-black  bg-red-700 text-white p-2 rounded-lg">
    <Link href={`/login`}>Login</Link>
</button>



</ul>


</div>
</div>


            </div>
        </motion.div>
       )}
       
    </AnimatePresence>  












<Link href={`/`} className="hover:text-red-500 font-semibold  cursor-pointer">Home</Link>


<div className="relative font-semibold group"
onMouseEnter={()=> {
 if(fashionTimer.current) clearTimeout(fashionTimer.current)
  setFashionOpen(true)
}}
onMouseLeave={()=> {
fashionTimer.current = setTimeout(()=> setFashionOpen(false), 100)
}}>
   <Link href={`/productpage`} onClick={()=> setCategory("Fashion")} className=" hover:text-red-500 cursor-pointer"> Fashion</Link>
   
{FashionOpen && (
   <ul 
    className="absolute top-full left-0 min-w-[180px] bg-white shadow-lg rounded-lg flex flex-col items-start gap-2 py-3 pl-3 mt-1 z-50">
        <Link href={`/productpage`} onClick={()=> setCategory("FashionWomen")} className=" hover:text-red-500 cursor-pointer">Women</Link>
        <Link href={`/productpage`} onClick={()=> setCategory("FashionMan")} className=" hover:text-red-500 cursor-pointer">Men</Link>
    </ul>
)}

</div>




<div className="relative font-semibold group"
onMouseEnter={()=> {
 if(ElectronicsTimer.current) clearTimeout(ElectronicsTimer.current)
  setElecOpen(true)
}}
onMouseLeave={()=> {
ElectronicsTimer.current = setTimeout(()=> setElecOpen(false), 100)
}}>
   <Link  href={`/productpage`} onClick={()=> setCategory("Electronics")} className=" hover:text-red-500 cursor-pointer"> Electronics</Link>
   
{ElecOpen && (
   <ul 
     className="absolute top-full left-0 min-w-[180px] bg-white shadow-lg rounded-lg flex flex-col items-start gap-2 py-3 pl-3 mt-1 z-50">
        <Link href={`/productpage`} onClick={()=> setCategory("Mobile")} className=" hover:text-red-500 cursor-pointer">Mobile</Link>
        <Link href={`/productpage`} onClick={()=> setCategory("Laptops")}  className=" hover:text-red-500 cursor-pointer">Leptops</Link>
        <Link  href={`/productpage`} onClick={()=> setCategory("TV")} className=" hover:text-red-500 cursor-pointer">Smart Watch</Link>
    </ul>
)}

</div>





<div className="relative font-semibold group"
onMouseEnter={()=> {
  if(BagsTimer.current) clearTimeout(BagsTimer.current)
  setBagOpen(true)
}}
onMouseLeave={()=> {
BagsTimer.current = setTimeout(()=> setBagOpen(false), 400)
}}>
   <Link  href={`/productpage`} onClick={()=> setCategory("Bag")} className=" hover:text-red-500 cursor-pointer"> Bags</Link>
  
{BagOpen && (
     
    <ul 
     className="absolute top-full left-0 min-w-[180px] bg-white shadow-lg rounded-lg flex flex-col items-start gap-2 py-3 pl-3 mt-1 z-50">
        <Link  href={`/productpage`} onClick={()=> setCategory("BagMen")} className=" hover:text-red-500 cursor-pointer">Men Bags</Link>
        <Link  href={`/productpage`} onClick={()=> setCategory("WomenBags")} className=" hover:text-red-500 cursor-pointer">Women Bags</Link>
</ul>
)}

</div>




<div className="relative font-semibold group"
onMouseEnter={()=> {
 if(FootwearTimer.current) clearTimeout(FootwearTimer.current)
  setfootOpen(true)
}}
onMouseLeave={()=> {
FootwearTimer.current = setTimeout(()=> setfootOpen(false), 100)
}}>
   <Link href={`/productpage`} onClick={()=> setCategory("Footwear")} className=" hover:text-red-500 cursor-pointer"> Footwear</Link>
   
{footOpen && (
     <ul 
    className="absolute top-full left-0 min-w-[180px] bg-white shadow-lg rounded-lg flex flex-col items-start gap-2 py-3 pl-3 mt-1 z-50">
        <Link  href={`/productpage`} onClick={()=> setCategory("FootwearMen")} className=" hover:text-red-500 cursor-pointer">Men Footwear</Link>
        <Link  href={`/productpage`} onClick={()=> setCategory("WomensFootwear")} className=" hover:text-red-500 cursor-pointer">Women Footwear</Link>
</ul>
)}
</div>





<Link   href={`/productpage`} onClick={()=> setCategory("Groceries")} className="hover:text-red-500 cursor-pointer font-semibold">
Groceries
</Link>


<Link  href={`/productpage`} onClick={()=> setCategory("Beauty")} className="hover:text-red-500 cursor-pointer font-semibold">
Beauty
</Link>


<Link href={`/productpage`} onClick={()=> setCategory("Wellness")} className="hover:text-red-500 cursor-pointer font-semibold">
Wellness
</Link>

<Link  href={`/productpage`} onClick={()=> setCategory("Jewellery")} className="hover:text-red-500 cursor-pointer font-semibold">
Jewellery
</Link>


<div className="hover:text-red-500 cursor-pointer font-semibold">
    <div>
        <p>Free International</p>
        <p>Delivery</p>
    </div>
</div>



</div>
</div>
{/* dekstop main header  */}




</div>
{/* dekstop  header   */}












{/* responsive menu  */}
<div className="bg-white xl:hidden z-[99999] shadow-lg p-2 fixed w-full flex flex-col gap-2">

<div className="bg-white flex justify-between w-full items-center">
    <div>
        <button className="cursor-pointer" onClick={()=> setsidebarcl(!sidebarcl)}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    </div>
     
      
     <AnimatePresence>
      {sidebarcl && (
        <motion.div 
         initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring",  damping: 20 }}
        onClick={(e)=> {
          if(e.target === e.currentTarget){
            setsidebarcl(false)
            setsideDropdown(null)
          }
        }}
        className=" fixed inset-0 z-[9999] transition-opacity duration-300">
            <div className={`flex flex-col fixed left-0 top-0 h-full bg-white w-56 md:w-80
                transform transition-transform duration-300 ${sidebarcl ? "translate-x-0" : "-translate-x-full"} `}>
                <p className="md:text-[20px] p-2 font-black text-[20px]">KAWSARSHOP</p>
                <div className="flex p-2 items-center justify-between">
                    <p className="text-[17px] font-semibold">Shop By Categories</p>
                    <FontAwesomeIcon icon={faXmark} className="cursor-pointer" onClick={()=> {setsidebarcl(false); setsideDropdown(null)}}/>
                </div>


<div className="flex flex-col">
<div className="flex flex-col justify-between p-2 gap-3">


<ul className="flex flex-col gap-4 font-semibold mt-3">





<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("fashion")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Fashion")}>Fashion</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "fashion" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "fashion" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("FashionWomen")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Women</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("FashionMan")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Men</Link>
          </div>
        )}

</li>








<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("electro")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Electronics")}>Electronics</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "electro" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "electro" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("Mobile")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Mobile</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("Laptops")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Leptop</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("TV")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Smart Watch</Link>
          </div>
        )}

</li>









<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("bag")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Bag")}>Bags</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "bag" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "bag" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("BagMen")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Men Bags</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("WomenBags")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Women Bags</Link>
          </div>
        )}

</li>





<li className="flex flex-col">
   
   <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   onClick={() => toggleDropdown("footw")}
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Footwear")}>Footwear</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold">{sideDropdown === "footw" ? "-" : "+"}</span>
    </div>

   </div>

 {sideDropdown === "footw" && (
          <div className="flex flex-col pl-5 pt-2">
            <Link href={`/productpage`} onClick={()=> setCategory("FootwearMen")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Men Footwear</Link>
            <Link href={`/productpage`} onClick={()=> setCategory("WomensFootwear")} className="p-2 hover:bg-blue-50 hover:rounded-lg transition-all duration-300">Women Footwear</Link>
          </div>
        )}

</li>




<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Groceries")}>Groceries</Link>
  <div className="w-5 h-5 flex items-center justify-center  border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>




<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Beauty")}>Beauty</Link>
  <div className="w-5 h-5 flex items-center justify-center  border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>








<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Wellness")}>Wellness</Link>
  <div className="w-5 h-5 flex items-center justify-center  border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>






<li>
    <div  className="flex flex-row cursor-pointer w-full justify-between items-center"
   style={{ userSelect: "none" }}
   >
 <Link href={`/productpage`} onClick={()=> setCategory("Jewellery")}>Jewellery</Link>
  <div className="w-5 h-5 flex items-center justify-center border-2 rounded cursor-pointer text-gray-600 hover:bg-gray-200 transition">
  <span className="text-xs font-bold"> + </span>
    </div>

   </div>
</li>



<button className="cursor-pointer hover:bg-black  bg-red-700 text-white p-2 rounded-lg">
    <Link href={`/login`}>Login</Link>
</button>



</ul>


</div>
</div>


            </div>
        </motion.div>
       )}
       
    </AnimatePresence>     
          
           
            
    <Link href={``} className="md:text-[15px] font-black">KAWSARSHOP</Link>
    <div>
        <button className="cursor-pointer text-gray-500 hover:text-red-500 font-black">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
        </button>
    </div>
</div>

<hr className="text-gray-300"/>


<div className="w-full overflow-x-auto scrollbar-hide">
    <div className="flex flex-row justify-between p-2 gap-3">
     <Link href={`/`} className="hover:text-red-500 font-semibold  cursor-pointer">Home</Link>
     <Link href={`/productpage`} onClick={()=> setCategory("Fashion")} className="hover:text-red-500 font-semibold  cursor-pointer">Fashion</Link>
     <Link href={`/productpage`} onClick={()=> setCategory("Electronics")} className="hover:text-red-500 font-semibold  cursor-pointer">Electronics</Link>
     <Link href={`/productpage`} onClick={()=> setCategory("Bag")} className="hover:text-red-500 font-semibold  cursor-pointer">Bags</Link>
     <Link href={`/productpage`} onClick={()=> setCategory("Footwear")} className="hover:text-red-500 font-semibold  cursor-pointer">Footwear</Link>
      <Link href={`/productpage`} onClick={()=> setCategory("Groceries")} className="hover:text-red-500 font-semibold  cursor-pointer">Groceries</Link>
      <Link href={`/productpage`} onClick={()=> setCategory("Beauty")} className="hover:text-red-500 font-semibold  cursor-pointer">Beauty</Link>
      <Link href={`/productpage`} onClick={()=> setCategory("Wellness")} className="hover:text-red-500 font-semibold  cursor-pointer">Wellness</Link>
      <Link href={`/productpage`} onClick={()=> setCategory("Jewellery")} className="hover:text-red-500 font-semibold  cursor-pointer">Jewellery</Link>

</div>

</div>


</div>






<div className="fixed xl:hidden z-[9999] bottom-0 bg-white w-full  shadow-xl">
    <div>

<ul className="flex justify-between items-center px-3 py-2">

<Link href={``} className="flex flex-col items-center active:text-red-600">
<FontAwesomeIcon icon={faHouse} />
<p>Home</p>
</Link>


<Link href={`/searchpage`} className="flex flex-col items-center active:text-red-600">
<FontAwesomeIcon icon={faMagnifyingGlass} />
<p>Search</p>
</Link>


<Link href={``} className="flex flex-col items-center active:text-red-600">
<FontAwesomeIcon icon={faHeart} />
<p>Wishlist</p>
</Link>



<Link href={``} className="flex flex-col items-center active:text-red-600">
<FontAwesomeIcon icon={faBagShopping} />
<p>Orders</p>
</Link>


<Link href={``} className="flex flex-col items-center active:text-red-600">
<FontAwesomeIcon icon={faUser} />
<p>Account</p>
</Link>




</ul>

    </div>
</div>
{/* responsive menu  */}









</div>
{/* main box  */}

        </div>
    
    )
}