"use client"

import img1 from '../../../assets/images/1759938778050_30745.jpg'
import img2 from '../../../assets/images/1759938751802_30744.jpg'
import img3 from '../../../assets/images/1751685130717_NewProject(8).jpg'
import img4 from '../../../assets/images/1748955932914_NewProject(1).jpg'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { useEffect } from 'react'


export default function FirstSlider(){
  
    const [sliderRef,  instance] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 10,
    }
  })

  useEffect(()=> {
    const interval = setInterval(()=> {
      instance.current.next()
    },2500)
    return ()=> clearInterval(interval)
  },[instance])

  
    return(
        <div className="z-0 p-2 rounded-xl cursor-pointer">
            <div ref={sliderRef} className="keen-slider z-0 w-full">
     
     <div className="keen-slider__slide number-slide1 w-full rounded-md">
    <img src={img1.src} alt=""  className="w-full rounded-xl shadow-xl h-full object-cover" />
      </div>

      <div className="keen-slider__slide number-slide2 rounded-md">
        <img src={img2.src} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="keen-slider__slide number-slide3 rounded-md">
      <img src={img3.src} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="keen-slider__slide number-slide4 rounded-md">
        <img src={img4.src} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="keen-slider__slide number-slide5 rounded-md">
      <img src={img2.src} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="keen-slider__slide number-slide6 rounded-md">
    <img src={img3.src} alt="" className="w-full h-full object-cover" />
      </div>

    <div className="keen-slider__slide number-slide7 rounded-md">
    <img src={img4.src} alt="" className="w-full h-full object-cover" />
      </div>


    </div>


        </div>
    )
}

