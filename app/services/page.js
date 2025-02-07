import Header from '../component/header';
import Banner from '../component/banner';  // Adjust the path as needed
import Whatwedo from '../component/service';  // Adjust the path as needed
export const metadata = {
  title: 'Services - KM Web Design',
  description: 'Discover our web design and SEO services to grow your business online. Get a customized solution with KM Web Design.',
};
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
     
      
      <Whatwedo />
     
    </div>
  );
}