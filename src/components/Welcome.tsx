'use client'
import React from 'react'
import { motion } from "motion/react"
function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen texxt-center p-6'>
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
        >
            <h1 className='text-4xl md:text-5xl font-extrabold text-[#F7F2D7]'>EaseKart — Shop quick, eat fresh</h1>
        </motion.div>
    </div>
  )
}
// F25A1A
export default Welcome