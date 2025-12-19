import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
import Nav from '@/components/Nav'
import connectDb from '@/lib/db'
import User from '@/model/user.model'
import { redirect } from 'next/navigation'
import React from 'react'

async function Home() {
  await connectDb()
  const session=await auth()
  const user=await User.findById(session?.user?.id)
  if(!user){
    redirect("/login")
  }
  // console.log(session);
  const InComplete= !user.mobile || !user.role || (!user.mobile && user.role=="user")
  if(InComplete){
    return <EditRoleMobile/>
  }
 const plainUser=JSON.parse(JSON.stringify(user))
//  console.log(plainUser);
//  console.log(user);
 
  return (
    <div className='bg-white w-full h-screen'>
    <Nav user={plainUser}/>
    </div>
  )
}

export default Home