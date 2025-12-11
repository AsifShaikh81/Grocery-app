'use client'
import React from 'react'
import { motion } from "motion/react"
import { ArrowRight, ShoppingBasket, Van } from 'lucide-react'

function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center max-sm:flex-col max-sm:gap-3'
      >
        <ShoppingBasket 
  className='w-14 h-14 mr-2 sm:mr-0 text-[#F25A1A] max-[863px]:hidden' 
/>



        <h1 className='text-4xl md:text-5xl font-extrabold text-[#F7F2D7] max-sm:text-3xl'>
          EaseKart — Shop quick, eat fresh
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='mt-4 text-lg md:text-xl text-[#F7F2D7] 
        w-[62%] max-sm:w-[90%]'
      >
        EaseKart brings you a seamless grocery shopping experience where 
        freshness meets convenience. Whether it's fruits, vegetables, dairy, 
        snacks, or daily household needs — we deliver everything straight 
        to your doorstep within minutes. 
      </motion.p>

      <div className='flex items-center mt-8'>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Van className='w-24 h-24 md:w-32 md:h-32 text-[#F25A1A] 
          max-sm:w-20 max-sm:h-20'/>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 15 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='inline-flex items-center gap-2 bg-[#F25A1A] text-[#F7F2D7] 
        hover:bg-[#D94E14] font-semibold py-3 px-8 rounded-2xl shadow-md mt-4
        max-sm:px-6'
      >
        Let's Go
        <ArrowRight/>
      </motion.button>

    </div>
  )
}

export default Welcome
