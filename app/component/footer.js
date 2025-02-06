import { Facebook, Twitter, Instagram, LinkedIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold mb-4">KM Web Design</h2>
            <p className="text-gray-400">
              We provide cutting-edge web design and development services to elevate your online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500">About</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

         

       
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KM Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
