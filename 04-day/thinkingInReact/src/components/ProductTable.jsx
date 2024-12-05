import ProductCategoryRow from "./Product CategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
     const rows = [];
     let lastCategory = null;
     let highestPrice = {
          name:null,
          price:0,
     };

   
     products.forEach((product) => {
       if (
         product.name.toLowerCase().indexOf(
           filterText.toLowerCase()
         ) === -1
       ) {
         return;
       }
       if (inStockOnly && !product.stocked) {
         return;
       }
       if (product.category !== lastCategory) {
         rows.push(
           <ProductCategoryRow
             category={product.category}
             key={product.category} />
         );
       }
       if (
          product.price > highestPrice.price) {
          highestPrice = {
               ...highestPrice ,
               name : product.name,
               price: product.price,
          }
       }
       rows.push(
         <ProductRow
           product={product}
           key={product.name}
           highestPrice={highestPrice}/>
       );
       lastCategory = product.category;
     });
       console.log("🚀 ~ products.forEach ~ rows:", rows)
   
     return (
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Price</th>
           </tr>
         </thead>
         <tbody>{rows}</tbody>
       </table>
     );
   }