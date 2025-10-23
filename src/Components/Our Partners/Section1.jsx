import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axis from "../images/axis.png";
import SBI from "../images/SBI.png";
import kotak from "../images/kotak.png";
import icici from "../images/icici.png";
import indusind from "../images/indusind.png";

// Partner logos
const partners = [
  { name: "Axis", img: axis },
  { name: "Kotak", img: kotak },
  { name: "ICICI", img: icici },
  { name: "IndusInd", img: indusind },
  { name: "SBI", img: SBI },
];

const Section1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enables auto-scrolling
    autoplaySpeed:2000, // Set the interval to 0 for instant movement
    pauseOnHover: true, // Pauses autoplay on hover
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl text-blue-950 font-bold mb-8">Our Partners</h2>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center"
              style={{
                padding: "0 20px", // Adds horizontal spacing between images
              }}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="h-16 w-auto object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section1;
