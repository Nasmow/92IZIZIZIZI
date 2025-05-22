
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold text-center mb-8">About BagageKom</h1>
            
            <div className="prose lg:prose-xl mx-auto">
              <div className="mb-10 text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="BagageKom Founder" 
                  className="rounded-lg shadow-lg mx-auto mb-4 max-w-md"
                />
                <p className="text-sm text-gray-500 italic">Our founder at BagageKom</p>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">A Personal Journey</h2>
              <p className="mb-6">
                BagageKom represents the fulfillment of a lifelong dream - to build a business from the ground up with dedication, care, and a deep commitment to human connection. Our founder has always envisioned creating something that wasn't just a service, but a genuine helping hand for travelers and customers in need.
              </p>
              
              <blockquote className="border-l-4 border-bagagekom pl-4 italic my-8">
                "I've always believed that business should be personal. Every package we handle, every traveler we assist - they're not just customers, they're people with stories, journeys, and needs. That human element is what drives everything we do at BagageKom."
              </blockquote>
              
              <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
              <p className="mb-6">
                At BagageKom, we believe that exceptional service comes from genuine human connection. Our founder built this business with her own hands, pouring her heart and soul into creating a company that truly understands and addresses the needs of travelers and customers.
              </p>
              
              <p className="mb-6">
                Every day, we strive to go beyond being just a service provider. We want to be your trusted partner, making your journey smoother, your travels lighter, and your experience better. That's the promise our founder made when she established BagageKom, and it's the promise we keep with every customer we serve.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">The Human Touch</h2>
              <p className="mb-6">
                In a world that's increasingly digital and automated, we proudly stand by the value of human connection. Our founder's passion for helping others and building meaningful relationships is at the core of our business model. When you choose BagageKom, you're not just getting a service - you're getting a dedicated team that genuinely cares about making your experience exceptional.
              </p>
              
              <p className="mb-6">
                We understand that behind every suitcase is a journey, behind every package is a purpose. That's why we treat your belongings with the same care and attention that we would give to our own. It's not just business - it's personal.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p>
                As we continue to grow and evolve, our founding principles remain unchanged: to provide exceptional service with a genuine human touch, to go the extra mile for every customer, and to build a business that makes a positive difference in people's lives. That's the BagageKom promise, and it's one we're proud to keep every single day.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
