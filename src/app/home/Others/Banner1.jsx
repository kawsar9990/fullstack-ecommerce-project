



import CountUp from 'react-countup';

export default function Banner1(){
    return(
        <div className="pt-10 pb-10 bg-white">

<div>

<div className='flex gap-2 uppercase font-bold text-[20px] justify-center items-center md:text-[25px]'>
    <p>welcome to </p>
    <p className='text-orange-600'>kawsarshop</p>
    <p>store</p>
</div>

<div className='text-center p-2 capitalize text-gray-500 pb-10'>
    <p>
        KawsarShop is a modern digital solutions hub dedicated to creating powerful, user-friendly, and visually appealing web experiences. We specialize in web development, e-commerce platforms, UI/UX design, and custom software tailored to meet the unique needs of businesses and individuals.
    </p>
</div>




<div className='p-2 flex flex-col md:flex-row md:justify-center justify-between items-center gap-5'>

<div className='flex justify-center text-center gap-5 items-center'>
    <div className='bg-gray-200 h-30 shadow-sm w-45 rounded-sm flex flex-col items-center justify-center p-2'>
<p className='font-bold text-green-600 text-[22px]'><CountUp end={999999999} start={1}/>+</p>
<p className='text-[12px]'> Orders Successfully </p>
</div>

<div className='bg-gray-200 h-30 shadow-sm w-45 rounded-sm p-2 flex flex-col items-center justify-center'>
<p className='font-bold text-green-600 text-[22px]'><CountUp end={100000000} start={1}/>+</p>
<p className='text-[12px]'>Happy Customers</p>
</div>

</div>

<div className='bg-gray-200 w-45 h-30 shadow-sm p-2 rounded-sm flex flex-col items-center justify-center'>
<p className='font-bold text-green-600 text-[22px]'>50/7</p>
<p className='text-[12px]'>Customer Support</p>
</div>



</div>





</div>
 

        </div>
    )
}