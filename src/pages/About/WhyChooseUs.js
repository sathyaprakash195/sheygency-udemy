import React from "react";

function WhyChooseUs() {
  const items = [
    {
      title: "Innovative and Passionate",
      image: "images/innovation.png",
      description:
        "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
    },
    {
      title: "Good Return on Investment",
      image: "images/investment.png",
      description:
        "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
    },
    {
      title: "Seamless Customer Support",
      image: "images/customer-support.png",
      description:
        "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
    },
  ];
  return (
    <div className="mx-32 sm:mx-3 mt-20 border shadow">
      <div className="bg-primary h-72 w-full flex justify-center items-center">
        <h1 className="text-7xl font-semibold text-white sm:text-4xl">Why Choose US</h1>
      </div>
      <div className="grid grid-cols-3 p-5 gap-10 sm:grid-cols-1">
        {items.map((item) => (
          <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300">
            <img src={item.image} className="h-20 w-20" />
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
