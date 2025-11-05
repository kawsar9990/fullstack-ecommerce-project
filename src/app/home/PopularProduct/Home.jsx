'use client'

import Item from "./PopularItem";


export default function HomePopularProduct(){
    return(
        <div className="bg-white">





<div className="p-5">


 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
          
         
          <div className="md:w-1/3">
            <p className="font-semibold text-lg md:text-xl">Popular Products</p>
            <p className="text-gray-600 text-sm">
              Do not miss the current offers until the end of March.
            </p>
          </div>

         
          <div className="md:w-2/3">
            <Item />
          </div>
        

    
        

        </div>



</div>

        </div>
    )
}