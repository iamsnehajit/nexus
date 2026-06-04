'use client'; // Component-e interactivity (click event) thakar jonno eta aboshshoi lagbe

import { useState } from "react";
import LabCard from "app/components/ui/Labcard";

interface Lab {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: string;
  image: string;
}

export default function LabListingPage() {
  // 1. States for dropdowns & accordions
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("Relevance");
  const [isBrandOpen, setIsBrandOpen] = useState<boolean>(true); // Left accordion toggle state
  const [isCountryOpen, setIsCountryOpen] = useState<boolean>(false);

  const sortOptions = ["Relevance", "Price: Low to High", "Price: High to Low", "Better Discount"];

 const labs: Lab[] = [
  {
    id: 1,
    title: "Diabetes Care",
    description: "Specially designed package to cover the preventive care aspects for diabetics",
    price: 800,
    oldPrice: 1250,
    discount: "60% OFF",
    image: "images/lab1.svg",
  },

  {
    id: 2,
    title: "Heart Checkup",
    description: "Complete heart health package",
    price: 1200,
    oldPrice: 2000,
    discount: "40% OFF",
    image: "images/lab2.svg",
  },
  {
    id: 3,
    title: "Heart Checkup",
    description: "Complete heart health package",
    price: 1200,
    oldPrice: 2000,
    discount: "40% OFF",
    image: "images/lab1.svg",
  },
  {
    id: 4,
    title: "Diabetes Care",
    description: "Specially designed package to cover the preventive care aspects for diabetics",
    price: 800,
    oldPrice: 1250,
    discount: "60% OFF",
    image: "images/lab1.svg",
  },

  {
    id: 5,
    title: "Heart Checkup",
    description: "Complete heart health package",
    price: 1200,
    oldPrice: 2000,
    discount: "40% OFF",
    image: "images/lab2.svg",
  },
  {
    id: 6,
    title: "Heart Checkup",
    description: "Complete heart health package",
    price: 1200,
    oldPrice: 2000,
    discount: "40% OFF",
    image: "images/lab1.svg",
  },
  {
    id: 7,
    title: "Diabetes Care",
    description: "Specially designed package to cover the preventive care aspects for diabetics",
    price: 800,
    oldPrice: 1250,
    discount: "60% OFF",
    image: "images/lab1.svg",
  },

  {
    id: 8,
    title: "Heart Checkup",
    description: "Complete heart health package",
    price: 1200,
    oldPrice: 2000,
    discount: "40% OFF",
    image: "images/lab2.svg",
  },
  {
    id: 9,
    title: "Heart Checkup",
    description: "Complete heart health package",
    price: 1200,
    oldPrice: 2000,
    discount: "40% OFF",
    image: "images/lab1.svg",
  },
];

  return (
    <div className="py-8 mt-34 border-t border-[#D7D7D7]">
    <div className="container-custom relative">
      
      {/* Breadcrumb */}
      <div className="mb-2 text-xs text-[#0D7F80]">
        Home / Health Condition / <span className="text-gray-600">Diabetic</span>
      </div>
      <h1 className="text-[25px] font-bold dark mb-4">
        Diabetic- <span className="text-[#676767] font-normal">Total Items ({labs.length})</span>
      </h1>
      <h2 className="text-[25px] font-bold dark mb-2">Filter By</h2>
      <div className="flex gap-6 items-start">
        
        {/* ================= LEFT PART: FILTER ACCORDION ================= */}
        <aside className="w-[360px] shrink-0 sticky top-35 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="space-y-4 text-xs">
            {/* Brands Section */}
            <div className="border border-[#cfcfcf] rounded-xl bg-[#EDEDED] py-4 px-2 hidden md:block">
              <div 
                className="font-semibold flex justify-between mb-2 text-[#403F3F] cursor-pointer text-sm select-none"
                onClick={() => setIsBrandOpen(!isBrandOpen)}
              >
                Must Have Tests <span>{isBrandOpen ? "−" : "+"}</span>
              </div>
              
              {/* Conditional Rendering using state */}
              {isBrandOpen && (
                <div className="space-y-1.5 transition-all duration-200 px-2">
                  <label className="flex items-center gap-2 pb-1 text-[#403F3F] text-sm cursor-pointer border-b-2 border-dotted border-[#CFCFCF]"><input type="checkbox" className="accent-[#0D7F80]" /> onetouch</label>
                  <label className="flex items-center gap-2 pb-1 text-[#403F3F] text-sm cursor-pointer border-b-2 border-dotted border-[#CFCFCF]"><input type="checkbox" className="accent-[#0D7F80]" /> sugar free</label>
                  <label className="flex items-center gap-2 pb-1 text-[#403F3F] text-sm cursor-pointer border-b-2 border-dotted border-[#CFCFCF]"><input type="checkbox" className="accent-[#0D7F80]" /> accu-chek</label>
                  <label className="flex items-center gap-2 pb-1 text-[#403F3F] text-sm cursor-pointer"><input type="checkbox" className="accent-[#0D7F80]" /> Other</label>
                </div>
              )}
            </div>
            
            {/* Country of Origin Section */}
            <div className="pb-3 border border-[#cfcfcf] rounded-xl bg-[#EDEDED] py-4 px-2 hidden md:block">
              <div 
                className="font-semibold flex justify-between text-gray-700 cursor-pointer select-none"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
              >
                Category <span className={isCountryOpen ? "text-gray-700" : "text-gray-400"}>{isCountryOpen ? "−" : "+"}</span>
              </div>
              {isCountryOpen && (
                <div className="mt-2 space-y-1.5 px-2">
                  <label className="flex items-center gap-2 pb-1 text-[#403F3F] text-sm cursor-pointer border-b-2 border-dotted border-[#CFCFCF]"><input type="checkbox" className="accent-[#0D7F80]" /> India</label>
                  <label className="flex items-center gap-2 pb-1 text-[#403F3F] text-sm cursor-pointer"><input type="checkbox" className="accent-[#0D7F80]" /> USA</label>
                </div>
              )}
            </div>

          </div>
        </aside>


        {/* ================= RIGHT PART: PRODUCT LIST & SORT DROPDOWN ================= */}
        <main className="flex-1">
          
          {/* Sort Dropdown Area */}
          <div className="flex justify-end  relative">
            <div>
              <div 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="absolute -top-30 right-0 text-sm px-3 py-2.5 border border-[#cfcfcf] rounded-[8px] bg-[#EDEDED] cursor-pointer hover:border-gray-300 flex items-center gap-1 select-none z-10"
              >
                Sort By : <span className="font-medium text-gray-800">{selectedSort}</span>
                <span className="text-[10px] text-gray-400">{isSortOpen ? "▲" : "▼"}</span>
              </div>

              {/* Floating Dropdown List */}
              {isSortOpen && (
                <div className="absolute -top-10 right-0 mt-1 w-50 bg-white border border-gray-100 rounded-lg z-10 text-sm p-3 overflow-hidden">
                  {sortOptions.map((option) => (
                    <div 
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortOpen(false); // Option select korle pop-up/dropdown bondho hobe
                      }}
                      className={`p-2.5 cursor-pointer transition-colors ${selectedSort === option ? 'bg-[#0D7F80] rounded-lg text-white font-medium' : 'hover:bg-[#0D7F80] hover:text-white hover:rounded-lg text-gray-600'}`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {labs.length > 0 ? (
                labs.map((singleLab) => (
                  <LabCard
                    key={singleLab.id}
                    discount={singleLab.discount}
                    price={singleLab.price}
                    oldPrice={singleLab.oldPrice}
                    title={singleLab.title}
                    description={singleLab.description}
                    image={singleLab.image}
                  />
                ))
              ) : (
                <p>No Labs Found</p>
              )}
          </div>
        </main>

      </div>
    </div>
    </div>
  );
}