"use client";
import {
    Cross,
  LogOutIcon,
  Package2,
  Search,
  ShoppingBasketIcon,
  User,
  X,
} from "lucide-react";
import mongoose from "mongoose";
import { AnimatePresence, motion } from "motion/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
interface IUser {
  _id?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password?: string;
  mobile?: string;
  role: "user" | "deliveryBoy" | "admin";
  image?: string;
}
function Nav({ user }: { user: IUser }) {
  //   console.log(user);
  const [open, setOpen] = useState(false);
  const profileDropDown = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      if (
        profileDropDown.current &&
        !profileDropDown.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => document.removeEventListener("mousedown", clickOutSide);
  }, []);

  return (
    <div className="w-[95%] fixed top-4 left-1/2  -translate-x-1/2  rounded-2x1 shadow-lg shadow-black/30 flex justify-between items-center h-20 px-4 md:px-8 z-50 md:px-8 z-50 bg-[#F25A1A]">
      {/* left section */}
      <Link
        href={"/"}
        className="text-[#F7F2D7] font-extrabold text-2xl sm:text-3xl tracking-wide hover:scale-105 transition-transform"
      >
        EaseKart
      </Link>
      {/* middle section */}
      <form className=" hidden md:flex items-center bg-white rounded-full px-4 py-2 w-1/2 max-w-lg shadow-md">
        <Search className="text-gray-500 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="search..."
          className="w-full outline-none text-gray-700 placeholder-gray-400"
        />
      </form>

      {/* right section */}
      <div className="flex flex-center gap-3 md:gap-6 relative">
        <div
          className="bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:scale-105 transition md:hidden"
          onClick={() => setSearchOpen((prev) => !prev)}
        >
          <Search className="text-[#F25A1A] " />
        </div>
        <Link
          href={""}
          className="relative bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:scale-105 transition"
        >
          <ShoppingBasketIcon className="text-[#F25A1A]" />
          <span className="absolute -top-1 -right-1 bg-[#F25A1A] text-[#F7F2D7] text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow">
            0
          </span>
        </Link>

        {/* profile */}
        <div className="relative" ref={profileDropDown}>
          <div
            className="bg-white rounded-full w-11 h-11 flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-transform"
            onClick={() => setOpen((prev) => !prev)}
          >
            {user.image ? (
              <Image
                src={user.image}
                alt="user"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <User />
            )}
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-50 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 z-999 "
              >
                <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt="user"
                        fill
                        className="object-cover rounded-full"
                      />
                    ) : (
                      <User />
                    )}
                  </div>
                  <div>
                    <div className="text-gray-800 font-semibold">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                      {user.role}
                    </div>
                  </div>
                </div>
                <Link
                  href={""}
                  className="flex items-center gap-2 px-3 py-3 hover:bg-[#f15d1eaf] rounded-lg text-gray-700 font-medium"
                  onClick={() => setOpen(false)}
                >
                  <Package2 className="w-5 h-5 text-[#F25A1A]" />
                  My Orders
                </Link>
                <button
                  className="flex items-center gap-2 w-full text-left px-3 py-3 hover:bg-[#f15d1eaf] rounded-lg text-gray-700 font-medium"
                  onClick={() => {
                    setOpen(false);
                    signOut({ callbackUrl: "/login" });
                  }}
                >
                  <LogOutIcon className="w-5 h-5 text-[#F25A1A]" />
                  Log Out
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-full shadow-lg z-40 flex items-center px-4 py-4"
              >
                <Search className="text-gray-500 w-5 h-5 mr-2"/>
                <form className="grow ">
                    <input type="text" placeholder="search..." className="w-full outline-none text-gray-700" />
                </form>
                <button onClick={()=>setSearchOpen(false)}>
                    <X className="text-gray-500 w-5 h-5"/>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Nav;
