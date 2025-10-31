
import img1 from '../../../assets/images/slide-1.jpg'
import img2 from '../../../assets/images/banner-1.jpg'
import img3 from '../../../assets/images/1742439558879_4-4.jpg'
import img4 from '../../../assets/images/1760239113701_NewProject(4).jpg'

import Link from 'next/link'


export default function Blog(){
  
    const item = [
        {
            id: 1,
            image: img1,
            text: "Capture every special moment with KawsarShop Cameras! Whether you’re a professional photographer or just love taking pictures, KawsarShop offers high-quality cameras that bring your vision to life.",
        },
        {
            id: 2,
            image: img2,
            text: "Upgrade your wardrobe with stylish, comfortable, and high-quality clothing from KawsarShop! Whether you’re looking for casual wear, office outfits, or trendy fashion pieces, KawsarShop has everything to elevate your style."
        },
        {
            id: 3,
            image: img3,
            text: "Capture life’s moments perfectly with KawsarShop Cameras — high-quality, reliable, and designed for every photographer.Every shot matters. Make it extraordinary with cameras from KawsarShop."
        },
        {
            id: 4,
            image: img4,
            text: "Upgrade your wardrobe effortlessly with stylish and comfortable clothing from KawsarShop.Look great, feel confident, and enjoy quality fashion with KawsarShop."
        }

    ]
  
    return(
        <div className="p-5">
        <div>

<div className='p-3'>
    <h1 className="font-semibold text-2xl">From The Blog</h1>
</div>


<div className='p-3'>

<div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
    {
        item.map(items => (
            <div href={``} key={items.id} >
            
          <Link href={``} 
           className='flex flex-col gap-5 group '>
          
            <div className='overflow-hidden rounded-md'>
                <img src={items.image.src} alt="" 
                className='w-full rounded-md h-70 object-cover transition-transform duration-300 group-hover:scale-105'/>
            </div>

            <div>
                <p className='text-gray-600 pb-5 hover:text-red-500 font-semibold'>
                    {items.text}
                </p>

            <Link href={``} className=' hover:text-red-500'>
            Read More...
            </Link>

            </div>


          </Link>

            </div>
        ))
    }
</div>

</div>



        </div>
        </div>
    )
}