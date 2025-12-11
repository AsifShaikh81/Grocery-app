'use client'
import React from 'react'
import { motion } from "motion/react"
import { ArrowRight, Bike, ShoppingBasket, Van } from 'lucide-react'
function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  text-center '>
        <motion.div
        initial={{
            opacity:0,
            y:-20
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            duration:1
        }}
        className='flex item-center'
        >
            {/* <ShoppingBasket className='w-13 h-13 text-[#F25A1A]'/> */}
            <ShoppingBasket className='w-14 h-14 mr-2
             text-[#F25A1A]'/>
            <h1 className='text-4xl md:text-5xl font-extrabold text-[#F7F2D7]'>EaseKart — Shop quick, eat fresh</h1>
        </motion.div>

        <motion.p
          initial={{
            opacity:0,
            y:10
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            duration:1,
            delay:0.5
        }}
        className='mt-4 text-grey-700 text-lg md:text-xl w-[62%] text-[#F7F2D7] '
        >
          EaseKart brings you a seamless grocery shopping experience where freshness meets convenience. Whether it's fruits, vegetables, dairy, snacks, or daily household needs — we deliver everything straight to your doorstep within minutes. 
        </motion.p>
        <div className='flex item-center  mt-8'>
        <motion.div
        initial={{
            opacity:0,
            // scale:0.9,
            x:-200
        }}
        animate={{
            opacity:1,
            // scale:1,
            x:0
            
        }}
        transition={{
            duration:1.5,
            delay:0.5
        }}
        
        >
           <Van className='w-24 h-24 md:w-32 md:h-32 text-[#F25A1A] '/>
             
             
        </motion.div>
        {/* <motion.div
        initial={{
            opacity:0,
            scale:0.9
        }}
        animate={{
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1,
            delay:0.5
        }}
        
        >
           
            <ShoppingBasket className='w-24 h-24 md:w-32 md:h-32
             text-[#F25A1A]'/>
        </motion.div> */}
        </div>

        <motion.button
         initial={{
            opacity:0,
            scale:0.5,
            y:-20
        }}
        animate={{
            opacity:1,
            scale:1,
            y:15
        }}
        transition={{
            duration:1,
            delay:0.5,
            
        }}
        className='inline-flex items-center gap-2 bg-[#F25A1A] text-[#F7F2D7] hover:bg-[#D94E14] font-semibold py-3 px-8 rounded-2xl shadow-md mt-4'
        >
        Let's Go
       <ArrowRight/>
        </motion.button>
    </div>
  )
}
// F25A1A
export default Welcome