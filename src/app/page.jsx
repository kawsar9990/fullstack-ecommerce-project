"use client"

import AskNotificationPermission from "../features/NotifactionLogo/AskNotificationPermission";
import FakeNotificationTitle from "../hooks/titlenotifac";
import LeavSit from "../hooks/leavsite";
import Loading from "../hooks/useLoading";

import FirstSlider from "./home/Home/firstslide";
import FirstSliderBox from "./home/Home/firstbox";
import HomePopularProduct from "./home/PopularProduct/page";
import Page from "./home/MainSlider/page";
import LatestPage from "./home/LatestProduct/page";
import FeaturedPage from "./home/FeaturedProducts/page";

import ElectronicsPage from "./home/ElectronicsPro/page";
import BagsPage from "./home/BagsPro/page";
import FootwearPage from "./home/FootwearPro/page";
import GroceriesPage from "./home/GroceriesPro/page";

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
      <Page />
      <LatestPage />
      <FeaturedPage />

      <ElectronicsPage />
      <BagsPage />
      <FootwearPage />
      <GroceriesPage />



    <Blog />
    </div>
    </div>
  );
}
