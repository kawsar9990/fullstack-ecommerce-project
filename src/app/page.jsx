"use client"

import AskNotificationPermission from "../features/NotifactionLogo/AskNotificationPermission";
import FakeNotificationTitle from "../hooks/titlenotifac";
import LeavSit from "../hooks/leavsite";
import Loading from "../hooks/useLoading";

import FirstSlider from "./home/Home/firstslide";
import FirstSliderBox from "./home/Home/firstbox";
import HomePopularProduct from "./home/PopularProduct/page";

import Blog from "./home/Blog/page";

export default function Home() {
  return (
     <div className="pt-30 xl:pt-35 ">

      <AskNotificationPermission />
      <FakeNotificationTitle />
      <LeavSit />
      <Loading />

    <div className="bg-[#F5F0F0]">
      <FirstSlider />
      <FirstSliderBox />
      <HomePopularProduct />



    <Blog />
    </div>
    </div>
  );
}
