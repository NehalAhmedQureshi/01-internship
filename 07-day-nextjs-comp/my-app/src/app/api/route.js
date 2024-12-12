// app/search/route.js

export async function GET(req) {
    //  console.log("🚀 ~ GET ~ req:", req)
     const url = new URL(req.url); // Get the request URL
    //  console.log("🚀 ~ GET ~ url:", url)
     const query = url.searchParams.get('query'); // Get the query parameter from the URL
   
     // You can use the query to search a database or perform any action
     console.log('Search query:', query);
   
     return new Response(`You searched for: ${query}`);
   }
