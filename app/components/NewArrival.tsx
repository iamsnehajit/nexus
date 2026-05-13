import ProductCard from '../components/ui/ProductCard';

const products = [
  {
    id: 1,
    name: "Horlicks Chocolate Delight Powder Jar 500 g",
    price: 226.71,
    oldPrice: 229.00,
    discount: 1,
    image: "/images/horlicks.jpg" 
  },
  {
    id: 2,
    name: "Horlicks Chocolate Delight Powder Jar 500 g",
    price: 226.71,
    oldPrice: 229.00,
    discount: 1,
    image: "/images/horlicks.jpg" 
  },
  {
    id: 3,
    name: "Horlicks Chocolate Delight Powder Jar 500 g",
    price: 226.71,
    oldPrice: 229.00,
    discount: 1,
    image: "/images/horlicks.jpg" 
  },
  {
    id: 4,
    name: "Horlicks Chocolate Delight Powder Jar 500 g",
    price: 226.71,
    oldPrice: 229.00,
    discount: 1,
    image: "/images/horlicks.jpg" 
  },
  {
    id: 5,
    name: "Horlicks Chocolate Delight Powder Jar 500 g",
    price: 226.71,
    oldPrice: 229.00,
    discount: 1,
    image: "/images/horlicks.jpg" 
  }
  
];

export default function ProductSection() {
  return (
    <div className='py-5 mt-5 md:mt-0'>
    <div className="container-custom">
      <div className="flex justify-between items-center mb-4">
        <h2 className='dark text-[20px] md:text-[25px] font-medium'>Explore something new</h2>
        <button className="text-[#F47527] text-sm md:text-[16px] font-medium uppercase">View All &gt;</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
}