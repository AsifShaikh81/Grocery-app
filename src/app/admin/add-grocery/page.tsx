"use client";
import { ArrowLeft, Loader, PlusCircle, Upload } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";

const categories = [
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Rice, Atta & Grains",
  "Snacks & Biscuits",
  "Spices & Masalas",
  "Beverages & Drinks",
  "Personal Care",
  "Household Essentials",
  "Instant & Packaged Food",
  "Baby & Pet Care",
];
const units = ["kg", "g", "liter", "ml", "piece", "pack"];

function AddGrocery() {
  
const[name,setName]=useState("")
const[category,setCategory]=useState("")
const[unit,setUnit]=useState("")
const[price,setPrice]=useState("")
const [preview, setPreview]=useState<string | null>()
const[backendImg,setBackendImg]=useState<File | null>()
const [loading,setLoading]=useState(false)
const handleImageChange=(e:ChangeEvent<HTMLInputElement>)=>{
  const files=e.target.files
  if(!files || files.length==0) return
   const file=files[0]
   setBackendImg(file)
   setPreview(URL.createObjectURL(file))
}
const handleSubmit=async (e:FormEvent) => {
  e.preventDefault()
  setLoading(true)
  try {
    const formData=new FormData()
    formData.append("name",name)
    formData.append("category",category)
    formData.append("price",price)
    formData.append("unit",unit)
    if(backendImg){
    formData.append("image",backendImg)
    }
    const result=await axios.post("/api/admin/add-grocery",formData)
    console.log(result.data)
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
  return (
    <div className="relative min-h-screen flex items-center justify-center py-16 px-4 ">
      <Link
        href={"/"}
        className="absolute top-6 left-6 flex items-center gap-2 font-semibold text-[#F25A1A] px-4 py-2 rounded-full shadow-md focus:ring-2 hover:focus:ring-[#F25A1A] hover:shadow-lg"
      >
        <ArrowLeft />
        <span className="hidden md:flex">Back to home</span>
      </Link>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0 }}
        className="bg-white w-full max-w-2xl shadow-2xl rounded-3xl border p-8 border-[#F25A1A]"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 ">
            <PlusCircle className="text-[#F25A1A] w-8 h-8" />
            <h1>Add your Grocery </h1>
          </div>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Fill out the details below to add grocery item
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full ">
          
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Grocery name <span className="text-red-500">*</span>
          </label>

          <input
            className="border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F25A1A] transition-all"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder="eg. sweets,potato..."
          />
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor=""
              >
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F25A1A] transition-all"
                onChange={(e)=>setCategory(e.target.value)}
                value={category}
              >
                <option value="">select category</option>
                {categories.map((cat) => (
                  <option value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor=""
              >
                Unit <span className="text-red-500">*</span>
              </label>
              <select
                name="unit"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F25A1A] transition-all"
                onChange={(e)=>setUnit(e.target.value)}
                value={unit}
              >
                <option value="">select unit</option>
                {units.map((unit) => (
                  <option value={unit}>{unit}</option>
                ))}
              </select>
            </div>
            <div></div>
          </div>
                
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Price <span className="text-red-500">*</span>
          </label>

          <input
            className="border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#F25A1A] mb-5 transition-all"
            type="text"
            id="name"
            placeholder="eg. 200"
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
          />
          {/* image */}
          <div>
          <label
            htmlFor="image"
            className="cursor-pointer flex items-center justify-center gap-2 text-gray-600 text-sm font-semibold border border-gray-300 rounded-xl px-6 py-3 transition-all w-full sm:w-auto"
          >
           <Upload className="w-5"/> Upload image<span className="text-red-500">*</span>
          </label>

          <input
            type="file"
            accept="image/*"
            id="image"
            hidden
            onChange={handleImageChange}
            
            
          />
          {
            preview &&  <Image src={preview} width={100} height={100} alt="img" className="rounded-xl shadow-md border border-gray-200 object-cover"/>
          }
          </div>
          <motion.button
          whileHover={{scale:1.02}}
          whileTap={{scale:0.9}}
          disabled={loading}
          className="mt-4 font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-60 transition-all items-center justify-center gap-2 bg-[#F25A1A] text-white"
          >
            {loading?<Loader className="w-5 h-5 animate-spin"/>:"Add Grocery"}

            
          </motion.button>
          
        </form>

      </motion.div>
    </div>
  );
}

export default AddGrocery;
