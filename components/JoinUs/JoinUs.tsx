"use client"

import { Button } from "../button";

const CtaSection: React.FC = () => {
    const handleGetStarted = () => {
      console.log("Get started clicked");
    };
  
    return (
      <section className="py-32 bg-white relative">
        <img 
          src="/icons/sparkle.svg"
          alt="Sparkle" 
          className="absolute top-1/4 right-1/4 w-10 h-10"
        />
        
        <img 
          src="/icons/sparkle.svg"
          alt="Sparkle" 
          className="absolute bottom-1/4 left-1/4 w-10 h-10"
        />
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-semibold mb-8">
            Join us now
          </h2>
          
          <p className="text-xl mb-8">
            Invest and Develop
          </p>
          
          <Button 
            variant="outline" 
            onClick={handleGetStarted}
          >
            Get started
          </Button>
        </div>
      </section>
    );
  };
  
  export default CtaSection;