"use client"

import FirstSlider from "./home/firstslide";
import FirstSliderBox from "./home/firstbox";

export default function Home() {
  return (
     <div className="pt-30 xl:pt-35 ">

    <div className="bg-[#F5F0F0]">
      <FirstSlider />
      <FirstSliderBox />

    </div>
    </div>
  );
}
