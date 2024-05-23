import React, {useState, useEffect} from "react";
import bedroom from "../../../../public/propertyListing/bedroom.jpg";
import Image from "next/image";
import "./about.css";


const About = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Function to toggle content visibility
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    };
    
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 800px)");
        const handleMediaQueryChange = (event) => {
        if (event.matches) {
          toggleContent();
        }
      };
  
      mediaQuery.addListener(handleMediaQueryChange);
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  

  return (
    <section style={{height: "auto"}} className="bottom-margin">
    <div className="relative mt-10">
      <div className="h-80 sm:h-96 lg:h-96 w-full">
        <Image
        src={bedroom}
          layout="fill"
          objectFit="cover"
          className="bedroom"
          alt="Why Choose Us?"
        />
      </div>
      <div className=" bg-white w-full max-w-screen-xl text-center why-choose-us">
      <div className="p-5 space-y-10 border-4 border-blue-200 shadow-md shadow-blue-200">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Why Choose Deal Acres?
        </h2>
        <p>
          Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing, it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate websites in India today, with some of the simple and easy facilities for uploading your property.
        </p>

        
      
        
      {isContentVisible && (
      <div className="readLess" id="readLess">
        <p>
          Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listings.
        </p>
<br />
        <p>
          So, a builder, an owner, or an agent does not need to spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.
        </p>
        </div>
)}

<span className="readMore" onClick={toggleContent}>
        {isContentVisible ? 'Read Less...' : 'Read More...'}
      </span>

        </div>
        <div className="text-center">
        <button className="mt-5 font-bold text-white text-center  py-3 bg-[#0061DF] px-6 rounded-lg">
          List Your Property for FREE NOW!
        </button>
        </div>
      </div>
    </div>

    </section>
  );
};

export default About;
