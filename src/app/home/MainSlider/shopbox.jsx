
import iphone from '../../../assets/item/ppp.png'
import monitor from '../../../assets/item/pngwing.com (1).png'
import machbok from '../../../assets/item/pngwing.com (2).png'
import wifi from '../../../assets/item/pngwing.com.png'

import { RingLoader } from "react-spinners";

import { useState } from 'react';

import Link from 'next/link';


export default function ShopBox(){
   
   const product = [
    {
        id: 1,
        image: iphone,
        name: "Iphone 16 pro",
        price: 2000,
        bg: "from-pink-500 to-fuchsia-700"
    },
      {
        id: 2,
        image: monitor,
        name: "Samsung A5 Monitor",
        price: 1000,
        bg: "from-rose-200 to-pink-400"
    },
      {
        id: 3,
        image: machbok,
        name: "Machbook Z5 Ultra",
        price: 2500,
        bg: "from-green-200 to-emerald-400"
    },
      {
        id: 4,
        image: wifi,
        name: "Samsung XZ Router",
        price: 200,
        bg: "from-amber-200 to-orange-500"
    },
   ]
   

   const [loading, setLoading] = useState(false);
    const handleLoading  = (id) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate.push(`/home/Blog/${id}`)
     }, 300);
   }




   
    return(
        <div className="pt-10">


{/* loading effect  */}
{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <RingLoader color="#010002ff" />
     </div>
)}
{/* loading effect  */}







<div className={`grid grid-cols-1 gap-5 p-3 lg:grid-cols-4`}>

{product.map(i => (
  <div key={i.id} className={`p-2 bg-gradient-to-r ${i.bg} rounded-lg h-[180]`}>

<div className='flex items-center px-5 py-5'>
  <div className='w-1/2'>
    <img src={i.image.src} alt="" className='w-25 md:w-20'/>
  </div>
  <div className='w-1/2'>
    <div className='text-black font-semibold'>By The Men Smart England Watch</div>
    <div className='font-bold text-orange-600'>${i.price}</div>
    <Link href={``}  onClick={handleLoading}
    className='uppercase font-bold hover:text-orange-600' style={{textDecoration: "underline"}}>Shop now</Link>
  </div>
</div>

  </div>
))}


</div>



        </div>
    )
}