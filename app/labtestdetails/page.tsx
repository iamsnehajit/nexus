import Listing from "app/components/listing2";
import Benefit from "app/components/Benefit";
import FAQSection from "app/components/Faq";
export default function page() {
  return (
    <div>
        <section>
          <Listing/>
        </section>
        <section>
          <FAQSection/>
        </section>
        <section>
          <Benefit/>
        </section>
    </div>
  )
}
