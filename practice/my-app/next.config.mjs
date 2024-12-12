/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
      loader:'custom',
      loaderFile:'./src/app/image copy.png',
      remotePatterns:[
         {
            protocol:'https',
            hostname:'imageio.forbes.com'
         },
         {
            protocol:'https',
            hostname:'media.istockphoto.com'
         },
         {
            protocol:'https',
            hostname:'media1.giphy.com'
         },
         {
            protocol:'https',
            hostname:'res.cloudinary.com'
         }
      ]
   }
};

export default nextConfig;
