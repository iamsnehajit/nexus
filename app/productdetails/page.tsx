'use client';

import { useState } from 'react';
import Image from 'next/image';
import map from "../../public/images/map-pin.svg";
import delivery from "../../public/images/alarm-clock-check.svg";
import share from "../../public/images/share.svg";
import SearchDropdown from 'app/components/ui/SearchDropdown';
import SimilarProduct from 'app/components/SimilarProduct';
import Benefit from "app/components/Benefit";
import manufacture from "../../public/images/manufacture.jpg";

export default function ProductDetailsPage() {
  // --- 1. Images Gallery State ---
  const images = [
    "/images/pampers-main.jpg",
    "/images/pampers-back.png",
    "/images/pampers-side.png",
    "/images/pampers-detail.png",
  ];
  const [activeImage, setActiveImage] = useState<string>(images[0]);

  // --- 2. Share Link Copy Function ---
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!"); 
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  // --- 3. Tabs State & Content Data ---
  const [activeTab, setActiveTab] = useState<string>('info');

  const tabContents = {
    info: {
      title: "Description",
      desc: "Pampers Complete Skin Comfort Diaper Pants XL are designed for toddlers weighing between 12-17 kg, offering a balance of dryness, comfort, and skin protection. These pant-style diapers feature a soft, breathable design enriched with aloe vera lotion...",
      features: [
        "Extra large size suitable for 12-17 kg toddlers",
        "Up to 12 hours of absorption",
        "Aloe vera lotion-enriched inner layer",
        "360-degree stretchable waistband"
      ]
    },
    medical: {
      title: "Medical Benefits",
      desc: "Advanced Anti-Rash Protection: The aloe vera-infused inner layer may help create a protective barrier between moisture and your baby's skin. This can reduce friction and may lower the chances of irritation and diaper rash.",
      features: [
        "Long-Lasting Dryness: The absorbent core uses advanced gel technology.",
        "Improved Hygiene Monitoring: The wetness indicator changes colour."
      ]
    },
    usage: {
      title: "Directions for use",
      desc: "How to fit: Pull the diaper up like pants, ensuring the waistband is secure around the baby's waist. How to remove: Simply tear the sides to remove and dispose safely.",
      features: []
    },
    safety: {
      title: "Safety Information",
      desc: "Store in a cool and dry place. Keep the packaging away from babies and children to avoid danger of suffocation.",
      features: []
    }
  };

  // --- 4. Interactive States ---
  const [quantity, setQuantity] = useState<number>(1);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Cart Array Hook (State Sync logic maintain korar jonno ekhane shorashori raw variables thakbe)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pampers Complete Skin Comfort Diaper Pants XL, 56 Count",
      price: 853.39,
      image: "/images/pampers-main.jpg",
    }
  ]);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleRemoveItem = (idToRemove: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== idToRemove));
  };

  // Real-time Dynamic Calculations based on active item array length
  const subtotal = cartItems.length > 0 ? cartItems[0].price * quantity : 0;

  return (
    <div className='relative mt-33.75 border-t border-[#D7D7D7] bg-white'>
      <div className="container-custom relative">
        
        {/* Breadcrumb */}
        <div className="mb-2 text-sm text-[#0D7F80] py-6">
          Home / OTC / <span className="text-gray-600">Pampers Complete Skin Comfort Diaper Pants XL, 56 Count</span>
        </div>

        {/* Top Grid: Images + Product Meta */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
          {/* ================= LEFT: IMAGES GALLERY ================= */}
          <div className="md:col-span-6 grid grid-cols-12 gap-4">
            {/* Thumbnails list */}
            <div className="col-span-2 flex flex-col gap-2 max-h-[400px] overflow-y-auto order-2">
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`border rounded-lg p-1 cursor-pointer overflow-hidden aspect-square flex items-center justify-center transition-all ${
                    activeImage === img ? 'border-[#0D7F80] shadow-sm' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-18 h-18 relative rounded overflow-hidden">
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="70px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Main Showcase Image Box */}
            <div className="col-span-10 border border-gray-100 rounded-2xl p-6 bg-white flex items-center justify-center relative min-h-[400px]">
              <div className="w-72 h-72 relative">
                <Image
                  src={activeImage}
                  alt="Active Product Showcase"
                  fill
                  priority 
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT: PRODUCT DETAILS DATA ================= */}
          <div className="md:col-span-6 relative">
            {/* Share Action Icon */}
            <button 
              onClick={handleShare}
              className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
              title="Copy Share Link"
            >
              <Image src={share} width={20} height={20} alt='Share'/>
            </button>

            {/* Tagline & Headers */}
            <label className="bg-[#F7EEFA] text-[#9258A8] text-sm font-semibold px-3.5 py-2 rounded-2xl mb-3 inline-block">Buy 2, +5% OFF</label>
            <h1 className="text-[25px] font-semibold text-gray-900 leading-[1.2]">
              Pampers Complete Skin Comfort Diaper Pants XL, 56 Count
            </h1>
            
            <p className="text-[16px] text-gray-500 mt-3">Selected size: <span className="font-bold text-gray-800">XL</span></p>
            <div className="flex gap-2 mt-3">
              {['XL', 'New Born', 'Small', 'XXXL'].map((size) => (
                <button key={size} className={`text-sm px-3 py-1 border rounded-2xl font-medium ${size === 'XL' ? 'border-[#0D7F80] bg-[#E2F9F0] text-[#0D7F80]' : 'border-[#403F3F] text-[#403F3F]'}`}>
                  {size}
                </button>
              ))}
            </div>

            {/* Pricing Panel Box */}
            <div className="bg-[#f0f3f3] border border-dashed border-[#dad8d8] rounded-xl py-5 px-4 mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-[20px] font-bold text-gray-800">₹853.39</span>
                <span className="text-sm text-gray-400 font-light line-through">MRP ₹1399</span>
                <span className="text-sm text-[#0D7F80] font-semibold">39% off</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">56 Diaper <span className='text-[#0D7F80] px-2'>•</span> ₹15.24/unit <span className='text-[#0D7F80] px-2'>•</span> (Inclusive of all Taxes)</p>
              
              {/* FIXED: Location and Delivery section Layout */}
              <div className='flex justify-between items-center border-y border-dashed border-[#BFBFBF] py-3 mt-5 mb-3'>
                <div className='location flex items-center gap-1.5'>
                  <p className='text-[16px] text-gray-800 flex items-center gap-1'>
                    <Image src={map} width={17} height={17} alt='Location' className='inline-block'/> 700049
                  </p> 
                  <button className='text-[14px] text-[#0D7F80] font-semibold underline ml-7 cursor-pointer' onClick={() => setIsModalOpen(true)}>Change</button>
                  
                  {/* Sliding Location Side Panel Drawer */}
                  <div className={`fixed top-0 right-0 h-full w-[300px] border-r border-[#f8f8f8]  bg-white z-[999] transform transition-transform duration-300 ease-in-out ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-bold text-gray-800">Select Location</span>
                        <button onClick={() => setIsModalOpen(false)} className="text-2xl cursor-pointer">&times;</button>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">Choose your delivery location</p>
                      <div className="flex gap-2 items-center border p-2 rounded-lg relative z-30">
                        <Image src={map} alt="Location Pin" width={18} height={20} priority className="map-logo"/>
                        <SearchDropdown />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className='delivery-time flex items-center'>
                  <p className='text-sm text-gray-500 font-normal flex items-center gap-1.5'>
                    <Image src={delivery} width={20} height={20} alt='Delivery' className='inline-block' /> 
                    Delivery By <span className='font-bold text-gray-800'>Today 12:20 PM</span>
                  </p>
                </div>
              </div>

              {/* Quantity Selector & Add to cart Wrapper */}
              <div className="flex items-center gap-4 mt-6 max-w-md">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-[46px] bg-white shadow-sm">
                  <button onClick={handleDecrease} className="px-4 h-full hover:bg-gray-100 font-bold text-gray-600 transition-colors cursor-pointer select-none">−</button>
                  <input type="number" value={quantity} readOnly className="w-12 text-center font-semibold text-gray-800 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                  <button onClick={handleIncrease} className="px-4 h-full hover:bg-gray-100 font-bold text-gray-600 transition-colors cursor-pointer select-none">+</button>
                </div>

                <button 
                  onClick={() => setIsCartOpen(true)}
                  className=" h-[46px] bg-[#0D7F80] text-white px-8 rounded-lg text-sm font-semibold hover:bg-[#0a6566] transition-all cursor-pointer flex items-center justify-center shadow-md active:scale-[0.98]"
                >
                  Add To Cart
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ==================== SIDE CART POP-UP ==================== */}
        {/* ========================================================= */}
        
        {/* BackDrop Overlay Effect */}
        <div 
          className={`fixed inset-0 bg-black/40 z-[9999] transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsCartOpen(false)}
        />

        {/* Drawer Sliding Body */}
        <div className={`fixed top-0 right-0 h-full w-[360px] sm:w-[400px] bg-white shadow-2xl z-[10000] flex flex-col transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800 text-base">My Cart</span>
              <span className="bg-[#0D7F80] text-white text-xs font-bold px-2 py-1 rounded-full">{cartItems.length}</span>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer">✕</button>
          </div>

          {/* Scrollable Item Rendering Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-gray-400 text-sm">Your cart is empty!</div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 border-b border-gray-100 pb-4 items-start">
                  
                  {/* Thumbnail Image rendering block container */}
                  <div className="w-16 h-16 bg-white border border-gray-100 rounded-lg p-1 relative shrink-0 flex items-center justify-center overflow-hidden">
                    <Image src={item.image} alt={item.name} fill sizes="64px" className="object-contain" />
                  </div>

                  {/* Info Column */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight mb-1">{item.name}</h4>
                    {/* FIXED: Directly sync text content to active template component state */}
                    <p className="text-[11px] text-gray-400">Qty: <span className="text-gray-800 font-medium">{quantity}</span></p>
                    
                    <div className="flex justify-between items-center mt-2">
                      {/* FIXED: Removed double currency rupee typo */}
                      <span className="text-sm font-bold text-gray-900">₹{(item.price * quantity).toFixed(2)}</span>
                      <button onClick={() => handleRemoveItem(item.id)} className="text-red-400 hover:text-red-600 text-xs cursor-pointer transition-colors font-medium">
                        Remove
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* Pricing Box Calculation Footer Panel */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Subtotal:</span>
              <span className="text-base font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#0D7F80] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0a6566] transition-colors cursor-pointer shadow">
              Proceed To Checkout
            </button>
          </div>
        </div>

        {/* ================= BOTTOM: INTERACTIVE TABS SYSTEM ================= */}
        <div className="mt-12 border-t border-dashed border-[#BFBFBF] pt-3 pb-8">
          <div className="flex flex-wrap gap-2 md:gap-6 border-b border-dashed border-[#BFBFBF] pb-3">
            {/* {[
              { id: 'info', label: 'Product Information' },
              { id: 'medical', label: 'Medical Benefits' },
              { id: 'usage', label: 'Directions for use' },
              { id: 'safety', label: 'Safety Information' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs md:text-sm font-medium transition-all relative cursor-pointer ${activeTab === tab.id ? 'text-[#0D7F80] font-semibold' : 'text-[#7B7979] hover:text-gray-600'}`}
              >
                {tab.label} {idx !== arr.length - 1 && <span className='ml-5'>|</span>}
              </button>
            ))} */}
            {[
            { id: 'info', label: 'Product Information' },
            { id: 'medical', label: 'Medical Benefits' },
            { id: 'usage', label: 'Directions for use' },
            { id: 'safety', label: 'Safety Information' },
          ].map((tab, idx, arr) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm md:text-sm font-medium transition-all relative cursor-pointer ${
                activeTab === tab.id ? 'text-[#0D7F80] font-semibold' : 'text-[#7B7979] hover:text-gray-600'
              }`}
            >
              {tab.label} 
              
              
              {idx !== arr.length - 1 && <span className='ml-5'>|</span>}
            </button>
          ))}
          </div>

          <div className="mt-6 max-w-4xl transition-all duration-300">
            <h2 className="text-[20px] font-bold dark mb-2">
              {tabContents[activeTab as keyof typeof tabContents].title}
            </h2>
            <p className="text-sm md:text-sm gray-2 leading-[1.2]">
              {tabContents[activeTab as keyof typeof tabContents].desc}
            </p>

            {tabContents[activeTab as keyof typeof tabContents].features.length > 0 && (
              <ul className="mt-5 space-y-1.5 list-disc pl-4 text-sm md:text-sm gray2">
                {tabContents[activeTab as keyof typeof tabContents].features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
            <section className='mt-5 relative'>
              <div className='container-custom'>
                <h2 className='dark text-[20px] md:text-[25px] font-medium mb-5'>From the Manufacturer</h2>
                <div className='grid grid-cols-12 gap-4'>
                  <div className='col-span-4'>
                    <Image src={manufacture} className="w-full h-auto object-contain" alt='Imahe not found'/>
                  </div>
                  <div className='col-span-4'>
                    <Image src={manufacture} className="w-full h-auto object-contain" alt='Imahe not found'/>
                  </div>
                  <div className='col-span-4'>
                    <Image src={manufacture} className="w-full h-auto object-contain" alt='Imahe not found'/>
                  </div>
                </div>
              </div>
            </section>
            <section className='mt-5'>
              <SimilarProduct/>
            </section>
            <section>
              <Benefit/>
            </section>
      </div>
    </div>
    
  );
}