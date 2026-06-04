import LabHero from "app/components/LabHero";
import LabDetails from "app/components/LabDetails";
import TopLabTest from "app/components/TopLabTest";
import HeroSlider from "app/components/Offer2";
import Organs from "app/components/Organs";
import Process from "app/components/Process";
import Propular from "app/components/PopularLabTest";
import Men from "app/components/ManLabTest";
import Women from "app/components/WomanLabTest";
import Benefit from "app/components/Benefit";

export default function page() {
  return (
    <div>
        <section>
            <LabHero/>
        </section>
        <section>
            <LabDetails/>
        </section>
        <section>
            <TopLabTest/>
        </section>
        <section>
            <HeroSlider/>
        </section>
        <section>
            <Organs/>
        </section>
        <section>
            <Propular/>
        </section>
        <section>
            <Process/>
        </section>
        <section>
            <Men/>
        </section>
        <section>
            <Women/>
        </section>
        <section>
            <Benefit/>
        </section>
    </div>
  )
}
