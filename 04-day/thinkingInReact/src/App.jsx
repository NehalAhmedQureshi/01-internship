import FilterableProductTable from './components/FilterableProductTable';


export default function App() {
  let PRODUCTS = [
    {category: "Fruits", price: 1, stocked: true, name: "Apple"},
    {category: "Fruits", price: 1, stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: 2, stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: 2, stocked: true, name: "Spinach"},
    {category: "Vegetables", price: 1, stocked: true, name: "Peas"},
    {category: "Vegetables", price: 4, stocked: false, name: "Pumpkin"},
  ];
  return <FilterableProductTable products={PRODUCTS} />;
}
