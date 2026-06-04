import OrderMedicine from "./OrderMedicine"

export default function ListingHero() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-[#007095] flex items-center mt-35">
       
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  
                  <div className="w-full h-full bg-[url('/images/pattern.png')] bg-no-repeat bg-cover"></div>
                  
                </div>
                
                <div className="container-custom">
                  <div className="text-center">
                    <h1 className="text-[#F8C129] font-bold text-[40px] leading-[1.2]">Get Medicines Fast</h1>
                    <p className="text-white font-light text-[30px] leading-[1.2]">with Superfast Delivery in your city</p>
                  </div>
                  <OrderMedicine/>
                  <div className="text-center listing-bottom-txt relative">
                    <p className="text-white text-[16px] leading-[1.2]">Cash on Delivery <span></span> Express Delivery <span></span> Easy Returns</p>
                  </div>
                </div>
    </div>
  )
}
