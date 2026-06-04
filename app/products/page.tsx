import ListingHero from "app/components/ListingHero"
import Listing from "app/components/listing";
import Benefit from "app/components/Benefit";
export default function page() {
  return (
    <div>
        <section>
            <ListingHero/>
        </section>
        <section>
          <Listing/>
        </section>
        <section className="mt-10">
          <Benefit/>
        </section>
    </div>
  )
}
