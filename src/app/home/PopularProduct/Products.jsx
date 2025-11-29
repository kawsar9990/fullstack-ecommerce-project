'use client'

import { useState } from "react";

import { useCategory } from "../../../context/CategoryContext.js";

import { RingLoader } from "react-spinners";

import Image from "next/image";

import fallbackImg from '../../../assets/svg/thimnail.jpg'


import { Fashion } from "../../../content/PopularCat/Fashion.js";
import { Electronics } from "../../../content/PopularCat/Electronics.js";
import { Bag } from "../../../content/PopularCat/Bags.js";
import { Footwear } from "../../../content/PopularCat/Footwear.js";
import { Beauty } from "../../../content/PopularCat/Beauty.js";
import { Groceries } from "../../../content/PopularCat/Groceries.js";
import { Wellness } from "../../../content/PopularCat/Welness.js";
import { Jewellery } from "../../../content/PopularCat/Jewellery.js";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link'


export default function ItemConnect(){
     const [loading, setLoading] = useState(false);
     const {activeTab} = useCategory();


    const handleLoading = (id) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };

  

  
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 4, spacing: 30 },
      },
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 480px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
  });

    
  const categoriesData  = {
    Fashion,
    Electronics,
    Bag,
    Footwear,
    Groceries,
    Beauty,
    Wellness,
    Jewellery
  }
   
    return(
        <div className="relative">


 {loading && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
          <RingLoader color="#010002ff" />
        </div>
      )}



 <div ref={sliderRef} className="keen-slider">
{categoriesData[activeTab].map(item => (
 <div
  key={item.id}
  className="keen-slider__slide group mb-5 rounded-lg cursor-pointer shadow-lg flex flex-col justify-between"
>
  <div>
    <div className="overflow-hidden relative">
      <Image
  src={item.image || fallbackImg}
  alt={item.name}
  width={300}
  height={200}
  onError={(e)=> (e.currentTarget.src = fallbackImg.src)}
  className="w-full h-[180px] object-cover rounded transition-all duration-500 group-hover:scale-110"
/>
      <div className="absolute text-white top-1 left-1 rounded-lg font-bold p-1 bg-red-600">
        {item.discountPercent}
      </div>
    </div>

    {loading ? (
  <div className="animate-pulse">
    <div className="h-[180px] bg-gray-200 rounded"></div>
    <div className="h-3 bg-gray-200 mt-2 rounded"></div>
    <div className="h-3 bg-gray-200 mt-1 rounded w-1/2"></div>
  </div>
    )
  :
  (
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
  )}
  </div>

  <div className="p-2 mb-2">
    <button onClick={()=> handleLoading(item.id)} className="bg-transparent hover:bg-black hover:text-white hover:outline-0 outline-2 text-center rounded-md text-red-500 cursor-pointer outline-red-600  p-1 w-full">
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
    )
}