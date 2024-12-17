import React from 'react';
import { Helmet } from 'react-helmet';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image1 from '../assets/img/pexels-cookiecutter-1148820.jpg';
import image2 from '../assets/img/pexels-field-engineer-147254-442150.jpg';
import image3 from '../assets/img/pexels-pixabay-60504.jpg';
import image4 from '../assets/img/pexels-shvetsa-3727469.jpg';
import image5 from '../assets/img/pexels-tara-winstead-8386440.jpg';
import consult from '../assets/img/consult.png';
import { Button } from '@mui/material';
import Ratings from '../components/Ratings';
import LogoMarquee from '../components/LogoMarquee';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const images = [
    {
      image: image1,
      text1: 'Seamless Digital Transformation Objectives',
      text2:
        'Achieve your business objectives with precision and efficiency. Explore how we turn vision into reality.',
      alt: 'Team working on digital transformation project',
    },
    {
      image: image2,
      text1: 'Faster Application Performance and Efficiency',
      text2:
        'Revolutionize your network performance and security with Network Traffic Optimization using SD WAN and ACI.',
      alt: 'Engineer optimizing network performance',
    },
    {
      image: image3,
      text1: 'Secure Your Data with Cloud-Driven Solutions',
      text2:
        'Keep your data safe and secure. Discover our expert-driven strategies for securing your data in the digital realm.',
      alt: 'Cloud-driven data security solutions',
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Home - Your Business Growth Partner</title>
        <meta
          name="description"
          content="Achieve seamless digital transformation, secure your data, and optimize network performance with expert consultation and cloud-driven solutions."
        />
        <meta name="keywords" content="Digital Transformation, Cloud Solutions, Network Optimization, Business Consultation" />
      </Helmet>

      <main className="w-full h-auto overflow-hidden font-poppins">
        {/* Hero Slider */}
        <section aria-label="Hero Slider" className="w-full">
          <Slider {...settings}>
            {images.map((item, index) => (
              <article key={index} className="relative w-full h-80 md:h-[500px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4"
                  role="region"
                  aria-label={`Slide ${index + 1}`}
                >
                  <h1 className="text-lg md:text-2xl font-bold mb-2">{item.text1}</h1>
                  <p className="text-sm md:text-base">{item.text2}</p>
                </div>
              </article>
            ))}
          </Slider>
        </section>

        {/* Consultation Section */}
        <section
          className="flex flex-col md:flex-row w-full py-10"
          aria-labelledby="consultation-heading"
        >
          <img
            src={consult}
            alt="Business consultation for growth"
            className="w-full md:w-1/2 object-cover"
            loading="lazy"
          />
          <div
            className="bg-pink-700 w-full md:w-1/2 px-6 py-8 md:px-12 md:py-14"
            role="region"
          >
            <h2
              id="consultation-heading"
              className="text-2xl md:text-4xl font-bold text-white mb-4"
            >
              Driving Business Excellence
            </h2>
            <p className="text-sm md:text-base text-white mb-6 leading-relaxed">
              Expert consultation to help grow your business. We provide
              personalized strategies to navigate your business toward success.
              Transform your vision into reality today.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#9d174d', // Custom pink color
                '&:hover': {
                  backgroundColor: '#9d174d', // Darker pink on hover
                },
                color: 'white', // Ensures text color is white
              }}
              aria-label="Contact Us for Consultation"
            >
              Get in Touch
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="my-8 px-4"
          aria-labelledby="testimonials-heading"
        >
          <h2
            id="testimonials-heading"
            className="text-lg md:text-2xl font-semibold text-center mb-6"
          >
            What Our Clients Say
          </h2>
          <Ratings />
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#ba0951]" aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading" className="sr-only">
            Subscribe to Our Newsletter
          </h2>
          <Newsletter />
        </section>
      </main>
    </>
  );
};

export default Home;
