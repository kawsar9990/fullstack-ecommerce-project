'use client'

import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Item() {
  const [loading, setLoading] = useState(false);
   const [activeTab, setActiveTab] = useState("Fashion");
  


 const categories = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ];



  const handleLoading = (id) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };

 
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer 
     text-black text-2xl w-8 h-8 flex items-center justify-center 
      rounded-full"
      onClick={onClick}
    >
      ❯
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer 
      text-black text-2xl w-8 h-8 flex items-center justify-center 
      rounded-full"
      onClick={onClick}
    >
      ❮
    </div>
  );


  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  
  };

  return (
    <div className="bg-white overflow-hidden relative">
     
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
          <RingLoader color="#010002ff" />
        </div>
      )}

    
      <div className="relative bg-white overflow-hidden">
        <Slider {...settings} className="uppercase text-[13px] font-semibold font-serif text-center">
          {categories.map((cat)=> (
        <div key={cat}>

 <button onClick={() => setActiveTab(cat)}
   className={`relative cursor-pointer py-2 px-3 transition-all duration-300 ${
   activeTab === cat
    ? "text-blue-600 after:absolute after:bottom-0 transition-transform duration-700 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
    : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {cat}
            </button>

        </div>    
          ))}
        </Slider>
      </div>
    </div>
  );
}
