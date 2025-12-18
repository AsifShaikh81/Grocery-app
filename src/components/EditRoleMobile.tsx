"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Bike, User, UserCog2, Van } from "lucide-react";
import axios from "axios";

function EditRoleMobile() {
  const [roles, setRoles] = useState([
    { id: "admin", label: "Admin", icon: UserCog2 },
    { id: "user", label: "User", icon: User },
    { id: "deliveryBoy", label: "Delivery Boy", icon: Van },
  ]);
  // "user","deliveryBoy","admin"
  const [selectRole, setSelectRole] = useState("");
  const [mobile, setMobile] = useState("");
  
  // fetching
  const handleRole=async () => {
    try {
      const result =await axios.post("/api/user/edit-role-mobile",{
        role:selectRole,
        mobile
      })
      console.log(result.data);
      
    } catch (error) {
      
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 w-full bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-[#F25A1A] mt-8"
      >
        Select Role
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectRole == role.id;
          return (
            <motion.div
              key={role.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => setSelectRole(role.id)}
              className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 transition-all ${
                isSelected
                  ? "border-[#F25A1A] border-4 bg-[#f15d1eaf] shadow-lg"
                  : "border-gray-300 bg-white hover:border-[#D94E14]"
              }`}
            >
              <Icon />
              <span>{role.label}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col items-center mt-10"
      >
        <label htmlFor="mobile" className="text-gray-700 font-medium mb-2">
          Enter your Ph no
        </label>
        <input
          type="tel"
          id="mobile"
          className="w-full max-w-xs md:w-80 px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F25A1A] focus:outline-none text-gray-800"

          placeholder="eg. 9840xxxxxx"
          onChange={(e)=>setMobile(e.target.value)}
        />
      </motion.div>
      <motion.button initial={{ opacity: 0, y: 20 }}
      disabled={mobile.length !==10 || !selectRole}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className={`inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-2x1 shadow-md transition-all duration-200 h-12 mt-10 ${
          selectRole && mobile.length === 10
          ? "bg-[#F25A1A] hover:bg-[#D94E14] text-[#F7F2D7]"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleRole}
        >
          Let's Go
          <ArrowRight/>
          
      </motion.button>
    </div>
  );
}

export default EditRoleMobile;
