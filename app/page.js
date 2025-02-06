import Header from './component/header';
import Banner from './component/banner';  // Adjust the path as needed
import Whatwedo from './component/service';  // Adjust the path as needed
import PricingSection from './component/pricing';  // Adjust the path as needed
import Footer from './component/footer';  // Adjust the path as needed

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
     
      <PricingSection />
      <Whatwedo />
      <Footer />
    </div>
  );
}