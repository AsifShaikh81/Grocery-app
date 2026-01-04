'use client'
import React from 'react'
import {motion} from "motion/react"
import Link from 'next/link'
import { EarthIcon, Facebook, Github, Instagram, Mail, MapPin, Phone, TwitterIcon } from 'lucide-react'

function Footer() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-linear-to-r from-[#F25A1A] to-[#D94E14] text-white mt-20"
    >
        <div className='w-[90%] md:w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#D94E14]'>
          <div>
<h2  className='text-2xl font-bold mb-3'>Easecart</h2>
<p className='text-sm text-white leading-relaxed'> Your one-stop online grocery store delivering freshness to your doorstep.  
            Shop smart, eat fresh, and save more every day!
</p>
          </div>
<div >
    <h2 className='text-xl font-semibold mb-3'>Quick Links</h2>
    <ul className='space-y-2 text-white text-sm'>
        <li><Link href={"/"} className='hover:text-white transition'>Home</Link></li>
        <li><Link href={"/cart"} className='hover:text-white transition'>Cart</Link></li>
        <li><Link href={"/my-orders"} className='hover:text-white transition'>My Orders</Link></li>
    </ul>
</div>

<div>
     <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-white text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Mumbai, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 9004670605
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> EaseCart@EaseCart.in
            </li>
          </ul>
          {/* 🌐 Social Links */}
          <div className="flex gap-4 mt-4">
            <Link href="https://x.com/AsifShaikh91159" target="_blank">
              <TwitterIcon className="w-5 h-5 hover:text-white transition" />
            </Link>
           <Link href="https://github.com/AsifShaikh81" target="_blank">
              <Github className="w-5 h-5 hover:text-white"></Github>
            </Link>
            <Link href="https://asif-portfolio-mu.vercel.app/" target="_blank">
              <EarthIcon className="w-5 h-5 hover:text-white"></EarthIcon>
            </Link>
            
          </div>
        </div>

</div>

<div className="text-center py-4 text-sm text-white bg-[#D94E14]">
        © {new Date().getFullYear()} <span className="font-semibold">Ease cart</span>. All rights reserved.
      </div>

      
      
    </motion.div>
  )
}

export default Footer
