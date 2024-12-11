/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
      remotePatterns:[
         {
            protocol:'https',
            hostname:'images.pexels.com'
         },
         {
            protocol:'https',
            hostname:'media.istockphoto.com'
         },
         {
            protocol:'https',
            hostname:'media1.giphy.com'
         }
      ]
   }
};

export default nextConfig;
