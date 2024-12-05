export default function ProductRow({ product ,highestPrice}) {
     const name = product.stocked ? product.name : 
       <span style={{
           color: 'red',
           border: product.name == highestPrice.name ? '2px solid red' : '',
        }}>
         {product.name}
       </span>;
     console.log(highestPrice);1
     
     return (
       <tr>
         <td>{name}</td>
         <td>{product.price}</td>
       </tr>
     );
   }