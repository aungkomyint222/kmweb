'use client';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black min-h-screen flex items-center justify-center pt-5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Small badge/pill above title */}
          <div className="inline-block mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-blue-300 font-medium">Professional Web Solutions</span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Affordable & Professional
            <br />
            Web Design Services
          </h1>

          {/* Description with improved readability */}
          <p className="text-lg md:text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get top-tier web design without breaking the bank. Our team creates 
            stunning websites tailored to your needs and budget.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:gap-3">
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-all" />
            </button>
            
            <button className="px-8 py-4 border border-white/30 text-white rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Optional social proof or stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-200/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200/80">Client Satisfaction</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;