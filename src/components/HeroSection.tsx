"use client";
import { Leaf, Smartphone, Truck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const slides = [
    {
      id: 1,
      icon: (
        <Leaf className="w-20 h-20 sm:w-28 sm:h-28 text-[#F25A1A] drop-shadow-lg" />
      ),
      title: "Fresh Organic Groceries",
      subtitle:
        "Farm-fresh fruits, vegetables, and daily essentials delivered to you.",
      btnText: "Shop Now",
      bg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      icon: (
        <Truck className="w-20 h-20 sm:h-28 text-[#F25A1A] drop-shadow-lg " />
      ),
      title: "Fast & Reliable Delivery",
      subtitle: "We ensure your groceries reach your doorstep in no time",
      btnText: "Order now",
      bg: "https://plus.unsplash.com/premium_photo-1661521303024-551ccd7af5cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      icon: (
        <Smartphone className="w-20 h-20 sm:2-28 sm:h-28 text-[#F25A1A] drop-shadow-lg" />
      ),
      title: "Shop Anytime Anywhere",
      subtitle: "Easy and seamless online grocey shopping experience",
      btnText: "Get started",
      bg: "https://www.salathai-restaurant.com/wp-content/uploads/2023/06/Online-Groceries.jpg",
    },
  ];

  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[98%] mx-auto mt-28 h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currSlide}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration:1.2 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[currSlide].bg}
            alt="slide"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop:backdrop-blur--[1px]" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-2xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {slides[currSlide].icon}
            </motion.div>

            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#F7F2D7]"
            >
              {slides[currSlide].title}
            </motion.h1>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-3 text-sm sm:text-base lg:text-lg text-[#F7F2D7] "
            >
              {slides[currSlide].subtitle}
            </motion.p>

            <motion.button
              initial={{ y:-20,scale:0.5,opacity: 0,  }}
              animate={{ y:0,scale:1,opacity: 1, }}
              transition={{delay:1, duration: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
            //   whileHover={{scale:1.09}}
            //   whileTap={{scale:0.96}}
              
              className="mt-6 w-fit px-6 py-3 bg-[#F25A1A] hover:bg-[#e14f15] text-[#F7F2D7] font-semibold rounded-xl shadow-lg"
            >
              {slides[currSlide].btnText}
            </motion.button>
          </div>
        </motion.div>

      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
    {
        slides.map((_,index)=>(
            <button key={index} className={`w-3 h-3 rounded-full transition-all ${
                index === currSlide ? "bg-white w-6" : "bg-white/50"
            }`} />
        ))
    }
      </div>
    </div>
  );
}

export default HeroSection;
