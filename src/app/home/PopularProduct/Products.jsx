'use client'

import { useState } from "react";

import { useCategory } from "../../../context/CategoryContext.js";

import { RingLoader } from "react-spinners";


import { Fashion } from "../../../content/allFashion.js";
import { Electronics } from "../../../content/allelectronics.js";
import { Bag } from "../../../content/allbags.js";
import { Footwear } from "../../../content/allFootwear.js";
import { Groceries } from "../../../content/allGroceries.js";
import { Beauty } from "../../../content/allbeauty.js";
import { Wellness } from "../../../content/allWellness.js";
import { Jewellery } from "../../../content/allJewellery.js";


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
{categoriesData[activeTab].map((item)=> (
 <div
  key={item.id}
  className="keen-slider__slide group mb-5 rounded-lg cursor-pointer shadow-lg flex flex-col justify-between"
>
  <div>
    <div className="overflow-hidden relative">
      <img
        src={item.image.src}
        alt=""
        className="transition-all duration-500 group-hover:scale-110 w-full h-50 object-cover rounded"
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
        <code className="line-through text-gray-400">{item.oldprice}</code>
        <code className="text-red-600 font-semibold">{item.price}</code>
      </div>
    </div>
  </div>

  <div className="p-2 mb-2">
    <button className="bg-transparent outline-2 text-center rounded-md text-red-500 cursor-pointer outline-red-600 p-2 w-full">
      <Link href={``} className="flex flex-row gap-3 justify-center">
        <code>
          <FontAwesomeIcon icon={faCartShopping} />
        </code>
        <code>Add To Cart</code>
      </Link>
    </button>
  </div>
</div>
))}

 </div>
        </div>
    )
}