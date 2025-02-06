
const AboutUs = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to KM Web Design! We started as a solo venture in 2025, founded by Aung Ko Myint in the vibrant city of Bangkok. What began as a passion project has now grown into a specialized service that caters to businesses seeking impactful web design and optimized SEO solutions.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-12 mb-12">
          <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden">
          
          </div>
          <div className="max-w-2xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Aung Ko Myint</h3>
            <p className="text-gray-600">
              Hi, I'm Aung Ko Myint, the founder of KM Web Design. Based in Bangkok, I started my journey as a solo developer and designer, focusing on creating websites that not only look great but also rank well on search engines. Over the years, my passion for both design and SEO has allowed me to help businesses grow and improve their online presence.
            </p>
            <p className="text-gray-600 mt-4">
              At KM Web Design, we specialize in SEO and web design services tailored to your business needs. Whether you're a small startup or an established business, we help you craft a visually stunning, high-performing website that drives traffic and boosts conversions.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Ready to elevate your business online? <span className="text-blue-500 font-medium hover:underline">Get in touch with us today!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
