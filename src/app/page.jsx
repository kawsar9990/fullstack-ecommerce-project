"use client"

import AskNotificationPermission from "../features/NotifactionLogo/AskNotificationPermission";
import FakeNotificationTitle from "../hooks/titlenotifac";
import LeavSit from "../hooks/leavsite";

import FirstSlider from "./home/homebox/firstslide";
import FirstSliderBox from "./home/homebox/firstbox";

import Blog from "./home/lastblog/blog";

export default function Home() {
  return (
     <div className="pt-30 xl:pt-35 ">

      <AskNotificationPermission />
      <FakeNotificationTitle />
      <LeavSit />

    <div className="bg-[#F5F0F0]">
      <FirstSlider />
      <FirstSliderBox />



    <Blog />
    </div>
    </div>
  );
}
