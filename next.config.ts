import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  
  images: {
    domains: [
      'm.radio.ytn.co.kr',
      'www.jipyong.com',
    ],
  },
};

export default nextConfig;
