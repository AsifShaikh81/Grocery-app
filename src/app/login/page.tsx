"use client"
import {
  EyeClosed,
  EyeIcon,
  Loader,
  Lock,
  LogInIcon,
  Mail,
  ShoppingBasket,
  User,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import googleImage from '@/assets/google.png'
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
// import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading] = useState(false)
  const router = useRouter()
  const formValidation = email !== "" && password !== "";
  const session=useSession()
  console.log(session);
  
 
  const handleLogIn= async (e:FormEvent) => {
    try {
      e.preventDefault()
      setLoading(true)
      await signIn('credentials',{
        email,password
      })
      setLoading(false)
    } catch (error) {
      console.log(error); 
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative">
  

      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-[#F25A1A] mb-2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome Back 
      </motion.h1>

      <p className="flex items-center gap-1">
        Log in to EaseKart
        <ShoppingBasket className="w-5 h-5 text-[#F25A1A]" />
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md mt-6 flex flex-col gap-4"
        onSubmit={handleLogIn}
      >
        
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="your email"
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 
                       focus:ring-2 focus:ring-[#F25A1A] focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="your password"
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 
                       focus:ring-2 focus:ring-[#F25A1A] focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {showPassword ? (
            <EyeIcon
              className="cursor-pointer
                        absolute right-3 top-3.5 w-5 h-5 text-grey-500"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeClosed
              className="cursor-pointer absolute right-3 top-3.5 w-5 h-5 text-grey-500"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <button
          disabled={!formValidation || loading}
          className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${
            formValidation
              ? "bg-[#F25A1A] hover:bg-[#D94E14] text-[#F7F2D7]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
            {loading?<Loader  className="w-5 h-5 animate-spin"/>:"Login"}
          
        </button>
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <span className="flex-1 h-px bg-gray-200"></span>
            OR           
            <span className="flex-1 h-px bg-gray-200"></span>
        </div>
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-xl text-gray-700 font-medium transition-all duration-200" onClick={()=>signIn('google')}>
            <Image src={googleImage} width={20} height={20} alt='google'/>
            Continue with Google
        </button>
      </motion.form>
      <p className="text-gray-600 mt-5 text-sm flex items-center gap-1 cursor-pointer"  onClick={()=>router.push("/register")}>Want to create an account <LogInIcon className="w-4 h-4"/>
      <span className="text-[#F25A1A]">
      Sign Up
      </span>

      </p>
    </div>
  );
}

export default LoginForm;
