'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import img1 from '../../assets/images/download.jpeg'
import img2 from '../../assets/images/Mark Zuckerberg.jpeg'
import img3 from '../../assets/images/Steve Jobs showing the first iphone.jpeg' 
import img4 from '../../assets/images/download (1).jpeg'
import Link from 'next/link';


const heroImg = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=80";


const reviews = [
  { name: 'Elon Musk', designation: 'CEO Tesla', img: img1.src, text: 'Amazing products! The laptop I bought is top-notch.' },
  { name: 'Mark Zuckerberg', designation: 'CEO Meta', img: img2.src, text: 'Great shopping experience, smooth checkout and fast delivery.' },
  { name: 'Steve Jobs', designation: 'Founder Apple', img: img3.src, text: 'Quality products, premium experience.' },
  { name: 'Bill Gates', designation: 'Founder Amazon', img: img4.src, text: 'Excellent support and product range.' }
];



const faqItems = [
  { q: "How can I order products online?", a: "Simply add the product to your cart and proceed to checkout using our secure payment gateway." },
  { q: "Where can I track my order?", a: "Go to your account dashboard and click on 'Orders' to track the delivery status." },
  { q: "Can I return a product?", a: "Yes, we offer 30 days return policy for eligible products." },
  { q: "Are all products genuine?", a: "Absolutely! We source products from verified manufacturers only." },
  { q: "Do you offer discounts?", a: "Yes, subscribe to our newsletter for exclusive deals and offers." },
  { q: "How can I contact support?", a: "You can reach out via our Contact page or live chat support." }
];



export default function FaqPage(){

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
    "(min-width: 640px)": {
      slides: {
        perView: 1,
        spacing: 10,
      },
    },
    "(min-width: 768px)": {
      slides: {
        perView: 2,
        spacing: 15,
      },
    },
    "(min-width: 1280px)": {
      slides: {
        perView: 3,
        spacing: 20,
      },
    },
  },
  });

  useEffect(()=> {
    const slider = instanceRef.current;
    if (!slider) return;
    const interval = setInterval(() => {
      slider.next();
    }, 1000);
    return () => clearInterval(interval);
  }, [instanceRef])


  return(
 <div className="min-h-screen bg-gray-900 text-white">

<motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[500px] md:h-[700px] w-full overflow-hidden"
      >
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover brightness-75"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
           Welcome KawsarShop
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Shop the latest laptops, smartphones & fashion accessories with exclusive deals.
          </p>
          <Link href={``} className="mt-6 cursor-pointer bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </Link>
        </motion.div>
      </motion.div>

    

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">❓ {item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>


    
     <section className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-10">
          Customer Reviews
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {reviews.map((r, idx) => (
            <div key={idx} className="keen-slider__slide p-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-800 p-6 rounded-xl h-70 cursor-pointer shadow-lg flex flex-col items-center"
              >
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">{r.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{r.designation}</p>
                <p className="text-gray-300 text-center">{r.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

 </div>
  )
}