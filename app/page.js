import Banner from "./Components/Banner";
import Collection from "./Components/Collection";
import NewArrivals from "./Components/NewArrivals";
import PromoBanner from "./Components/PromoBanner";
import Summer from "./Components/Summer";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <PromoBanner></PromoBanner>
      <Collection></Collection>
      <Summer></Summer>
    </div>
  );
}
