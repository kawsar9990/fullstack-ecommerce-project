"use client"



import img1 from '../../assets/images/1741660988059_ele.png'
import img2 from '../../assets/images/1741661045887_bag.png'
import img3 from '../../assets/images/1741661061379_foot.png'
import img4 from '../../assets/images/1741661077633_gro.png'
import img5 from '../../assets/images/1749273446706_jw.png'
import img6 from '../../assets/images/1755610847575_file_1734525204708_fash.png'
import img7 from '../../assets/images/1759725032658_file_1734525255799_beauty.png'
import img8 from '../../assets/images/1741661105893_well.png'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link'

export default function FirstSliderBox(){
  
 const [sliderRef] = useKeenSlider({
    loop: false,
   mode: "free-snap",
    slides: {
      perView: 8,
      spacing: 15,
    },
    breakpoints: {

    "(max-width: 1280px)": {
        slides: {
            perView: 8,
            spacing: 15,
        }
    },

     "(max-width: 1024px)": {
        slides: {
            perView: 5,
            spacing: 10,
        }
    },

     "(max-width: 540px)": {
        slides: {
            perView: 3,
            spacing: 8,
        }
    }

    }


  })
    
   
  
    return(
<div className="z-0 p-5 rounded-xl cursor-pointer">

     <div ref={sliderRef} className="keen-slider z-0 w-full ">
     


      <div className="keen-slider__slide number-slide1  w-full shadow-2xs  bg-white rounded-xl p-5 justify-between flex flex-col">
        <Link href={``} >
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img1.src} alt="" className='w-full object-cover'/>
            <p className='text-[12px]'>Electronics</p>
        </div>
        </Link>
      </div>



      <div className="keen-slider__slide number-slide2  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
         <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img2.src} alt="" className='w-full h-full object-cover'/>
            <p className='text-[12px]'>Bags</p>
        </div>
        </Link>
    </div>
   


      <div className="keen-slider__slide number-slide3  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
     <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img3.src} alt="" className='w-full h-full object-cover'/>
            <p className='text-[12px]'>Footwear</p>
        </div>
        </Link>
    </div>




      <div className="keen-slider__slide number-slide4  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
    <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img4.src} alt="" className='w-full h-full'/>
            <p className='text-[12px]'>Groceries</p>
        </div>
        </Link>
      </div>





      <div className="keen-slider__slide number-slide5  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
         <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img5.src} alt="" className='w-full h-full'/>
            <p className='text-[12px]'>Jewellery</p>
        </div>
        </Link>
      </div>



      <div className="keen-slider__slide number-slide6  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
         <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img6.src} alt="" className='w-full h-full'/>
            <p className='text-[12px]'>Fashion</p>
        </div>
        </Link>
      </div>



      <div className="keen-slider__slide number-slide7  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
         <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img7.src} alt="" className='w-full h-full'/>
            <p className='text-[12px]'>Beauty</p>
        </div>
        </Link>
      </div>


      <div className="keen-slider__slide number-slide8  w-full shadow-2xs bg-white rounded-xl p-5 justify-between flex flex-col">
         <Link href={``}>
        <div className='flex flex-col gap-2 text-center justify-center items-center p-2'>
            <img src={img8.src} alt="" className='w-full h-full'/>
            <p className='text-[12px]'>Wellness</p>
        </div>
        </Link>
      </div>
   
   
   
    </div>

</div>
    )
}

