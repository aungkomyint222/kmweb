import Header from '../component/header';

export default function Home() {
  return (
    <div>
      <Header />
    
      <section className="py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Thank you for your interest in KM Web Design! If you have any questions or inquiries, feel free to email me at 
          <a href="mailto:myintkoaung4@gmail.com" className="text-blue-500 hover:underline">myintkoaung4@gmail.com</a>.
          I'll be happy to assist you!
        </p>
      </div>
    </section>
    </div>
  );
}