import React from 'react';
import image1 from '../assets/img/contact.png';
import Map from '../components/Map';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';

const Contact = () => {
  return (
    <div className="w-full font-poppins ">
      {/* SEO Metadata */}
      <head>
        <title>Contact Us | Fullworks Limited</title>
        <meta
          name="description"
          content="Get in touch with Manifold Computers for sales, support, or any inquiries. Contact us via email or book a session today."
        />
      </head>

      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
  <img
    src={image1}
    alt="Contact Manifold Computers"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
    <h1 className="font-bold text-3xl md:text-4xl">Contact Us</h1>
  </div>
</section>


      {/* Contact Info Section */}
      <section className="flex flex-wrap md:flex-nowrap gap-6 my-8 mx-4 md:mx-28 text-center">
      <Paper className="p-6 flex-1 shadow-md text-center">
  <img 
    src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/344_salesman_flatline.png" 
    alt="Speak to Technology"
    className="mx-auto mb-4 w-24 h-24 object-contain"
  />
  <h2 className="font-bold text-lg mb-2">Speak to Sales</h2>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#9d174d', // Custom pink color
      '&:hover': {
        backgroundColor: '#7a1239', // Slightly darker pink on hover
      },
      color: 'white',
    }}
    className="my-2"
    onClick={() => window.location.href= "mailto:sales@manifoldcomputers.com"}
  >
    Book a Session
  </Button>
  <p className="text-sm text-gray-600">sales@manifoldcomputers.com</p>
</Paper>


  <Paper className="p-6 flex-1 shadow-md text-center">
  <img 
    src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/tech.png" 
    alt="Speak to Technology"
    className="mx-auto mb-4 w-24 h-24 object-contain"
  />
  <h2 className="font-bold text-lg mb-2">Speak to Technology</h2>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#9d174d', // Custom pink color
      '&:hover': {
        backgroundColor: '#7a1239', // Slightly darker pink on hover
      },
      color: 'white',
    }}
    className="my-2"
    onClick={() => window.location.href = 'mailto:technology@manifoldcomputers.com'}
  >
    Book a Session
  </Button>
  <p className="text-sm text-gray-600">technology@manifoldcomputers.com</p>
</Paper>

</section>

      {/* Map Section */}
      <section className="my-8 mx-4 md:mx-28">
        <Map />
      </section>

      {/* Call to Action */}
      <section className="my-8 bg-pink-700 rounded-full w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto lg:mx-6 p-4 text-white">
  <p className="text-center font-poppins text-sm sm:text-base md:text-lg">
    GET IN TOUCH WITH US
  </p>
</section>


      {/* Contact Form */}
      <section className="m-8 mx-4 md:mx-28">
        <h2 className="text-center font-bold text-2xl mb-6">
          How Can We Assist You?
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-medium">
                Enter Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@example.com"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="123-456-7890"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="5"
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <Button
            type='submit'
              variant="contained"
              sx={{
    backgroundColor: '#9d174d', // Custom pink color
    '&:hover': {
      backgroundColor: '#9d174d', // Darker pink on hover
    },
    color: 'white', // Ensures text color is white
  }}
              className="text-white py-2 px-6"
            >
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
