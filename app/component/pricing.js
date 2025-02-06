'use client';
import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
    const tiers = [
        {
          name: "Basic",
          price: "1,500",
          period: "/one-time",
          description: "Perfect for small business websites",
          features: [
            "10-page responsive website",
            "Basic SEO setup",
            "Basic contact form",
            "Mobile-friendly design",
            "1 month of support",
            "Basic hosting setup"
          ],
          isPopular: false,
          ctaText: "Get Started",
          domainFee: "Add-on or use Netlify’s domain"
        },
        {
          name: "Medium",
          price: "3,500",
          period: "/one-time",
          description: "Ideal for growing businesses",
          features: [
            "30-page responsive website",
            "Advanced SEO optimization",
            "Custom contact forms",
            "Mobile-first design",
            "3 months of support",
            "Premium hosting setup",
            "Social media integration",
            "Google Analytics setup"
          ],
          isPopular: true,
          ctaText: "Choose Medium",
          domainFee: "Add-on or use Netlify’s domain"
        },
        {
          name: "Enterprise",
          price: "15,000",
          period: "/one-time",
          description: "large-scale wordpress site ",
          features: [
            "200+ page responsive website",
            "Full SEO suite",
            "Custom functionality",
            "E-commerce integration",
            "6 months of priority support",
            "Premium hosting & domain",
            "Social media integration",
            "Analytics dashboard",
            "Custom admin panel"
          ],
          isPopular: false,
          ctaText: "Contact Us",
          domainFee: "Add-on or use Netlify’s domain"
        }
      ];
      

  return (
    <section className="py-16 bg-gray-50 text-black">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs. All plans include unlimited revisions until you're completely satisfied.
        </p>
      </div>
  
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tiers.map((tier, index) => (
          <div 
            key={index}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              tier.isPopular ? 'border-2 border-blue-500' : ''
            }`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price} Baht</span>
                <span className="text-gray-500">{tier.period}</span>
              </div>
  
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
  
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold ${
                  tier.isPopular
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
  
      <div className="text-center mt-12 text-gray-600">
        <p>Need a custom plan? <button className="text-blue-500 font-medium hover:underline">Contact us</button></p>
      </div>
    </div>
  </section>
  
  );
};

export default PricingSection;