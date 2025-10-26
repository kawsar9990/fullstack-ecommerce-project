'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Users, Target, ShieldCheck, Globe, Star} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
     


      <section className="relative h-[500px] w-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-300">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">About KawsarShop</h1>
          <p className="mt-4 text-gray-800 text-lg md:text-xl max-w-2xl mx-auto">
            KawsarShop — your trusted destination for tech, fashion & lifestyle products. Crafted with passion and integrity.
          </p>
        </motion.div>
      </section>

     


      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
            alt="KawsarShop Team"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              KawsarShop is an innovative e-commerce platform dedicated to providing
              a seamless shopping experience. Our mission is to deliver high-quality
              products and excellent customer service, all under one digital roof.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From humble beginnings, KawsarShop has grown into a trusted marketplace
              connecting thousands of customers with top brands worldwide.
            </p>
          </div>
        </div>
      </motion.section>


 
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
          >
            <Target className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower every shopper with access to quality products and a
              seamless experience. KawsarShop aims to bring joy to online shopping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
          >
            <Globe className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the most customer-centric e-commerce platform, where
              users trust KawsarShop for quality, reliability, and satisfaction.
            </p>
          </motion.div>
        </div>
      </section>




    

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-extrabold mb-10">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Users className="w-8 h-8 text-amber-500 mx-auto" />, num: "50K+", label: "Happy Customers" },
            { icon: <ShoppingBag className="w-8 h-8 text-amber-500 mx-auto" />, num: "10K+", label: "Products Sold" },
            { icon: <ShieldCheck className="w-8 h-8 text-amber-500 mx-auto" />, num: "100%", label: "Secure Payments" },
            { icon: <Star className="w-8 h-8 text-amber-500 mx-auto" />, num: "4.9/5", label: "Customer Rating" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              {item.icon}
              <h3 className="text-3xl font-bold mt-3">{item.num}</h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    
    



      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-10">Meet the KawsarShop Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Ahmed", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/65.jpg" },
              { name: "Rafid Hasan", role: "CTO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Nusrat Jahan", role: "Marketing Head", img: "https://randomuser.me/api/portraits/women/72.jpg" },
              { name: "Arif Rahman", role: "Operations Manager", img: "https://randomuser.me/api/portraits/men/44.jpg" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow p-5"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-400"
                />
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
   





      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join the KawsarShop Experience</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore the finest collection of products and enjoy a seamless online shopping experience with KawsarShop.
        </p>
        <Link href={`/`} className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-600 transition">
          Shop Now
        </Link>
      </motion.section>
    </div>
  );
}
