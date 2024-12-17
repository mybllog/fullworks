import React, { useState } from 'react';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import image1 from '../assets/img/Herosection.png';
import cc from '../assets/img/CC.jpg';
import modern from '../assets/img/modern.jpg';
import cyber from '../assets/img/cyber-security.jpg';
import ceo from '../assets/img/ceo-removebg-preview.png';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ChatRounded } from '@mui/icons-material';

const Services = () => {
  const [activeText, setActiveText] = useState(null);

  const services = [
    {
      id: 1,
      img: cc,
      title: 'Connectivity and Communication',
      description: `Stay connected and communicate seamlessly with our innovative Connectivity and Communication solutions. Software Defined Network Infrastructure, Wireless and Mobility options, Network Performance Optimization, and Unified Communication with Voice and Video.`,
    },
    {
      id: 2,
      img: modern,
      title: 'Modern IT Infrastructure',
      description: `Modern IT Infrastructure ensures your business growth with Software Defined Infrastructure (SDI), virtualization, cloud solutions, and modular data centers.`,
    },
    {
      id: 3,
      img: cyber,
      title: 'Cyber Security',
      description: `Robust digital security strategies for threat analysis, including Network Security, Infrastructure Security, Application Security, and User Security.`,
    },
  ];

  const handleTextToggle = (id) => {
    setActiveText(activeText === id ? null : id);
  };

  return (
    <div className="w-full font-poppins">
      {/* SEO Meta Tags */}
      <head>
        <title>IT Services | Modern IT Infrastructure | Cyber Security Solutions</title>
        <meta
          name="description"
          content="Explore Manifold's Connectivity, Modern IT Infrastructure, and Cyber Security services. Elevate your business with scalable and smart IT solutions."
        />
        <meta name="keywords" content="IT services, Modern IT Infrastructure, Cyber Security, Connectivity, Communication Solutions, IT Support" />
      </head>

      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={image1}
          alt="Hero section - Business IT Services"
          className="w-full h-64 md:h-80 object-cover"
        />
      </section>

      {/* Services Section */}
      <section className="px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Our IT Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Paper
              key={service.id}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleTextToggle(service.id)}
              component="article"
            >
              <img
                src={service.img}
                alt={`${service.title} - IT Service`}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${
                  activeText === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                {activeText === service.id && (
                  <p className="text-sm text-center px-4">{service.description}</p>
                )}
              </div>
            </Paper>
          ))}
        </div>
      </section>

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "IT Services",
          "serviceType": "Modern IT Infrastructure, Cyber Security, Connectivity and Communication",
          "provider": {
            "@type": "Organization",
            "name": "Manifold Computers",
          },
          "areaServed": "Global",
          "description": "We offer IT solutions, including Modern IT Infrastructure, Connectivity, and Cyber Security services.",
        })}
      </script>
    </div>
  );
};

export default Services;
