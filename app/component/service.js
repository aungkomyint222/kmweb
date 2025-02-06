'use client';
import React, { useState, useEffect, useRef } from 'react';

const WhatWeDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const services = [
    {
      title: "Brainstorming",
      description: "We start by understanding your business, goals, and target audience. If you already have branding, we align with it. If not, we help create a unique brand identity."
    },
    {
      title: "Branding (If Needed)",
      description: "We design logos, select brand colors, and create a consistent visual identity that reflects your values and resonates with your audience."
    },
    {
      title: "Web Design & UI/UX",
      description: "Using leading design software, we create user-friendly and visually appealing website designs that provide a seamless experience."
    },
    {
      title: "Website Development",
      description: "We turn designs into functional, responsive websites using modern technologies to ensure a smooth user experience across devices."
    },
    {
      title: "Hosting & Domain Setup",
      description: "We provide secure hosting and domain services that ensure your website is always up and running, with optimal performance."
    },
    {
      title: "Content Creation",
      description: "Our team creates compelling, SEO-optimized content that speaks to your audience while enhancing your brand's voice."
    },
    {
      title: "SEO & Backlinks",
      description: "We optimize your website to rank higher on search engines and build high-quality backlinks to boost your site's credibility."
    },
    {
      title: "Speed Optimization",
      description: "We ensure fast loading times to provide a seamless and engaging user experience on all devices."
    },
    {
      title: "Maintenance & Support",
      description: "We provide ongoing maintenance services to keep your website up-to-date, secure, and running smoothly at all times."
    }
  ];

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto text-center px-4 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-8">Our Approach</h2>
        
        {/* Mobile View (Swipeable Carousel) */}
        <div className="md:hidden">
          <div 
            ref={slideRef}
            className="bg-gray-100 p-6 rounded-lg min-h-[300px] relative touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold">
                {currentIndex + 1}. {services[currentIndex].title}
              </h3>
            </div>
            <p className="text-lg">
              {services[currentIndex].description}
            </p>
            
            {/* Dots navigation */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe instruction (shows only initially) */}
           
          </div>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;