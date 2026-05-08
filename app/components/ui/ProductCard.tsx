// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// export default function ProductCard({ product }) {
//   const [quantity, setQuantity] = useState(0);

//   const handleAdd = () => setQuantity(1);
//   const handleIncrease = () => setQuantity(prev => prev + 1);
//   const handleDecrease = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

//   return (
//     <div className="bg-white g w-full flex flex-col relative h-[359px]">

//       {/* Product Image */}
//       <div className="relative w-full h-50 mt-4 mb-4 border border-[#E6E6E6] rounded-[12px] flex justify-center items-center">
//         {/* Discount Badge */}
//           {product.discount && (
//             <span className="absolute top-2 left-2 orange poppin common-txt font-bold">
//               {product.discount}% OFF
//             </span>
//           )}
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={130} height={130}
//           className="object-contain"
//         />
//       </div>

//       {/* Product Info */}
//       <h3 className="common-txt gray2 leading-[1.2]">
//         {product.name}
//       </h3>

//       <div className="mt-4">
//         {/* <div className="flex items-baseline gap-2 mb-3">
//           <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
//           <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
//         </div> */}
//         <div className='grid grid-cols-12'>
//           <div className='col-span-6'>
//               <div className="">
//                 <p className="text-lg leading-[1.3] font-bold dark">₹{product.price}</p>
//                 <p className="text-sm text-[#798383] line-through">₹{product.oldPrice}</p>
//               </div>
//           </div>
//           <div className='col-span-6 text-right'>
//               {quantity === 0 ? (
//               <button
//                 onClick={handleAdd}
//                 className="shadow-[0px_0px_4px_0px_#0D7F80] cursor-pointer text-[#0D7F80] text-[16px] py-1.5 px-4 border rounded-[8px] border-[#0D7F80] font-medium hover:text-[#fff] hover:bg-[#0D7F80]"
//               >
//                 ADD
//               </button>
//             ) : (
//               <div className="flex items-center justify-between bg-[#0D7F80] text-white shadow-[0px_0px_4px_0px_#0D7F80] border rounded-[8px] border-[#0D7F80] overflow-hidden">
//                 <button 
//                   onClick={handleDecrease}
//                   className="px-2 py-1.5 hover:bg-[#F47527] text-[16px] font-medium cursor-pointer"
//                 >
//                   −
//                 </button>
//                 <span className="font-medium text-[16px]">{quantity}</span>
//                 <button 
//                   onClick={handleIncrease}
//                   className="px-2 py-1.5 hover:bg-[#F47527] text-[16px] font-medium cursor-pointer"
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Add Button or Quantity Selector */}
        
//       </div>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import Image from 'next/image';

// শুধুমাত্র টাইপস্ক্রিপ্টের জন্য এই ইন্টারফেসটি যোগ করা হয়েছে
interface ProductProps {
  product: any; 
}

export default function ProductCard({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(1);
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="bg-white g w-full flex flex-col relative h-[359px]">

      {/* Product Image */}
      <div className="relative w-full h-50 mt-4 mb-4 border border-[#E6E6E6] rounded-[12px] flex justify-center items-center">
        {/* Discount Badge */}
          {product.discount && (
            <span className="absolute top-2 left-2 orange poppin common-txt font-bold">
              {product.discount}% OFF
            </span>
          )}
        <Image
          src={product.image}
          alt={product.name}
          width={130} height={130}
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <h3 className="common-txt gray2 leading-[1.2]">
        {product.name}
      </h3>

      <div className="mt-4">
        <div className='grid grid-cols-12'>
          <div className='col-span-6'>
              <div className="">
                <p className="text-lg leading-[1.3] font-bold dark">₹{product.price}</p>
                <p className="text-sm text-[#798383] line-through">₹{product.oldPrice}</p>
              </div>
          </div>
          <div className='col-span-6 text-right'>
              {quantity === 0 ? (
              <button
                onClick={handleAdd}
                className="shadow-[0px_0px_4px_0px_#0D7F80] cursor-pointer text-[#0D7F80] text-[16px] py-1.5 px-4 border rounded-[8px] border-[#0D7F80] font-medium hover:text-[#fff] hover:bg-[#0D7F80]"
              >
                ADD
              </button>
            ) : (
              <div className="flex items-center justify-between bg-[#0D7F80] text-white shadow-[0px_0px_4px_0px_#0D7F80] border rounded-[8px] border-[#0D7F80] overflow-hidden">
                <button 
                  onClick={handleDecrease}
                  className="px-2 py-1.5 hover:bg-[#F47527] text-[16px] font-medium cursor-pointer"
                >
                  −
                </button>
                <span className="font-medium text-[16px]">{quantity}</span>
                <button 
                  onClick={handleIncrease}
                  className="px-2 py-1.5 hover:bg-[#F47527] text-[16px] font-medium cursor-pointer"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}