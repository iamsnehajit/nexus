import OrderMedicine from "./OrderMedicine2"

export default function LabHero() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-[#007095] flex items-center mt-35">
       
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  
                  <div className="w-full h-full bg-[url('/images/pattern.png')] bg-no-repeat bg-cover"></div>
                  
                </div>
                
                <div className="container-custom">
                  <div className="text-center">
                    <h1 className="text-[#F8C129] font-bold text-[40px] leading-[1.2] mb-2">Easy Ways To Book A Test</h1>
                    <p className="text-white font-medium text-[16px] leading-[1.2]">Enjoy the comfort of a high-quality diagnostic lab from the comfort of your home.</p>
                  </div>
                  <OrderMedicine/>
  
                </div>
    </div>
  )
}
