import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import HeathCat from "./components/HealthDepertment";
import Mostbuy from "./components/Mostbuy";
import Services from "./components/Services";
import LabTest from "./components/LabTest";
import OrderMedicine from "./components/OrderMedicine";
import NewArival from "./components/NewArrival";
import Offer from "./components/Offer";
import Spotlight from "./components/Spotlight";
import Benefit from "./components/Benefit";

export default function Home() {
  return (
    <div>
      <main>
        <section className="hero-section">
          <HeroSlider />
        </section>
        <section>
          <HeathCat/>
        </section>
        <section>
          <Mostbuy/>
        </section>
        <section>
          <Services/>
        </section>
        <section>
          <LabTest/>
        </section>
        <section>
          <OrderMedicine/>
        </section>
        <section>
          <NewArival/>
        </section>
        <section>
          <Offer/>
        </section>
        <section>
          <Spotlight/>
        </section>
        <section>
          <Benefit/>
        </section>
      </main>
    </div>
  );
}
