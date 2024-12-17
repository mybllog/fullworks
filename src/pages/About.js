import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import image1 from '../assets/img/Herosection1.png';
import { Lightbulb, Star, ChatRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [activeText, setActiveText] = useState(null);

  const services = [
    {
      id: 1,
      img: 'https://store.manifoldcomputers.com/Gbemiga_Delano-1.png',
      name: 'Gbemiga Delano',
      title: 'MD, Chief Executive Officer',
      description: `Gbemiga Delano is the founder, CEO, and visionary of Manifold Computers. A consummate business entrepreneur with over 30 years corporate management experience at the forefront of the delivery of Technology and Enterprise solutions.`,
    },
    {
      id: 2,
      img: 'https://store.manifoldcomputers.com/uju%20-1-.jpg',
      name: 'Uju Nwaobi-onyekwere',
      title: 'Chief Financial Officer',
      description: `Uju Nwaobi-Onyekwere brings over 8 years of dedicated service to Manifold as the Chief Financial Officer...`,
    },
  ];

  const handleTextToggle = (id) => {
    setActiveText(activeText === id ? null : id);
  };

  return (
    <div className="w-full font-poppins">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | Fullworks Limited</title>
        <meta
          name="description"
          content="Learn about Fullworks Limited, an ISO 9001:2015 certified IT System Integration Company delivering digital transformation solutions across Africa."
        />
        <meta name="keywords" content="Fullworks, IT Solutions, System Integration, Team, About Company" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={image1}
          alt="Hero section showcasing Manifold Computers"
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
        />
      </section>

      {/* About Company Section */}
      <section className="m-6 mt-6 text-center">
        <div className="border bg-pink-800 w-40 h-10 rounded-full mx-auto flex items-center justify-center">
          <h2 className="text-white text-sm md:text-base">About Company</h2>
        </div>
      </section>

      {/* Introduction */}
      <main className="flex flex-col md:flex-row justify-between items-start px-4 py-10 md:py-20 md:space-x-12 lg:space-x-24 md:px-10 lg:px-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Discover Our Story of Success</h1>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm text-gray-800 leading-relaxed">
            At Fullworks, we are equipped with the right team of experts to ensure we deliver value to your business.
            We’re an ISO 9001:2015 certified, leading IT System Integration Company delivering digital transformation
            solutions across Africa.
          </p>
        </div>
      </main>

      {/* Key Values */}
      <section className="flex justify-center py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Performance */}
          <article className="flex flex-col items-center">
            <Lightbulb className="text-pink-700 text-5xl mb-2" />
            <h3 className="font-bold text-xl mb-2">Performance</h3>
            <p className="text-sm text-gray-600">
              We provide Simple, Smart, Scalable Technology premised on integrity.
            </p>
          </article>

          {/* Customers */}
          <article className="flex flex-col items-center">
            <Star className="text-pink-700 text-5xl mb-2" />
            <h3 className="font-bold text-xl mb-2">Customers</h3>
            <p className="text-sm text-gray-600">
              We strive for excellence and constantly exceed customer's expectations.
            </p>
          </article>

          {/* Team */}
          <article className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUsers} className="text-pink-700 text-4xl mb-2" />
            <h3 className="font-bold text-xl mb-2">Team</h3>
            <p className="text-sm text-gray-600">
              We bring out the best in our employees and ensure optimal work-life balance.
            </p>
          </article>
        </div>
      </section>

      {/* Management Section */}
      <section className="px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-8">Executive Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Paper
              key={service.id}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleTextToggle(service.id)}
              component="article"
            >
              <img
                src={service.img}
                alt={`Portrait of ${service.name}`}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ${
                  activeText === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-md mb-2">{service.title}</p>
                {activeText === service.id && (
                  <p className="text-sm text-center px-4">{service.description}</p>
                )}
              </div>
            </Paper>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
