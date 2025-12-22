import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname:"lh3.googleusercontent.com"},
      {hostname:"plus.unsplash.com"},
      {hostname:"images.unsplash.com"},
      {hostname:"www.salathai-restaurant.com"},
      
    ]
  }
};

export default nextConfig;
