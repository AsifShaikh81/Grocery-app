import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDb from "./lib/db"
import User from "./model/user.model"
import bcrypt from "bcryptjs"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type:"email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,request) {
    
            await connectDb()
            const email=credentials.email
            const password=credentials.password as string
            const user=await User.findOne({email})
            if(!user){
                throw new Error("user does not exist")
            }
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                throw new Error("incorrect password")
            }
            return {
                id:user._id.toString(),
                email:user.email,
                name:user.name,
                
            }
        
      },
    }),
  ],
  callbacks:{
    // token ke andar user ka data dalta hai
      jwt({token,user}){
       if(user){
        token.id=user.id,
        token.name=user.name,
        token.email=user.email
       }
       return token 
      },
      //  session k andar token ka dal diya 
      session({session,token}){
        if(session.user){
            session.user.id=token.id as string,
            session.user.name=token.name as string,
            session.user.email=token.email as string,
            session.user.role=token.role as string,
            
        }
        return session 

      }
  },
  pages:{
    // define a page where u will land after signin/
    signIn:"/login",
    error:"/login"
  },
  session:{
    strategy:"jwt",
    maxAge:10*24*60*60*1000 //expires after 10 day 
  },
  secret:process.env.AUTH_SECRET
})