// import { document } from "postcss";

import { document } from "postcss";

// import { document } from "postcss";

// app/page.js
export default async function Page() {
     const res = await fetch('https://dummyjson.com/products');
     const products = await res.json();
     let filterText;
     console.log("🚀 ~ Page ~ filterText:", filterText)
     // console.log(products); // Logs fetched data
     // console.log(document?document:false);
     // document && console.log(document)
     
     return (
          <div className='main'>
               <input type="text" className="filterText" />
               {products.products.map((data, key) => (
                    <div key={key}>{data.title}</div>
               ))}
          </div>
     );
}
