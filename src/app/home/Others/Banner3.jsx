import img1 from '../../../assets/images/1.jpg'
import img2 from '../../../assets/images/2.png'
import img3 from '../../../assets/images/3.jpg'



// small smg 
import img4 from '../../../assets/images/3 (1).jpg'
import img5 from '../../../assets/images/4.jpg'
import img6 from '../../../assets/images/5.jpg'
import img7 from '../../../assets/images/8.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Banner3(){
    return(
        <div className="pt-10  bg-white">

     <div className='flex flex-col gap-5'>



<div className='flex justify-center w-full items-center text-center'>

<Swiper pagination={true} modules={[Pagination]} className="mySwiper cursor-pointer">
        <SwiperSlide>
<img src={img1.src} alt="" className='w-full'/>
        </SwiperSlide>


        <SwiperSlide>
<img src={img2.src} alt="" className='w-full'/>
        </SwiperSlide>

        <SwiperSlide>
<img src={img3.src} alt="" className='w-full'/>
        </SwiperSlide>

      <SwiperSlide>
<img src={img1.src} alt="" className='w-full'/>
        </SwiperSlide>

      <SwiperSlide>
<img src={img2.src} alt="" className='w-full'/>
        </SwiperSlide>

      <SwiperSlide>
<img src={img3.src} alt="" className='w-full'/>
        </SwiperSlide>

      <SwiperSlide>
<img src={img1.src} alt="" className='w-full'/>
        </SwiperSlide>

      <SwiperSlide>
<img src={img2.src} alt="" className='w-full'/>
        </SwiperSlide>

      <SwiperSlide>
<img src={img3.src} alt="" className='w-full'/>
        </SwiperSlide>

      </Swiper>

</div>





<div className='flex'>

<div>
    <img src={img4.src} alt="" />
</div>

<div>
    <img src={img5.src} alt="" />
</div>

<div>
    <img src={img6.src} alt="" />
</div>

<div>
    <img src={img7.src} alt="" />
</div>

</div>





     </div>

        </div>
    )
}