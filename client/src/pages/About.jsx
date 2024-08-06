import React from 'react';
import { FaStar, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {
  const testimonials = [
    { text: "Primeprop made our home-buying experience seamless and stress-free. Highly recommended!", author: "Jane Doe" },
    { text: "The team at Primeprop was incredibly knowledgeable and professional. We found our dream home thanks to them!", author: "John Smith" },
    { text: "Exceptional service and great advice. Primeprop is the best in the business!", author: "Sarah Lee" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='bg-gray-100'>
      <div className='relative bg-gradient-to-r from-blue-500 to-teal-200 text-white py-20'>
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        <div className='relative z-10 text-center'>
          <h1 className='text-5xl font-bold mb-4'>Discover Primeprop</h1>
          <p className='text-lg mb-6'>Your trusted partner in real estate</p>
        </div>
      </div>

      <div className='py-16 px-4 max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold mb-4 text-slate-800'>About Us</h2>
            <p className='mb-4 text-slate-700 text-lg'>
              Primeprop is a premier real estate agency dedicated to guiding clients through buying, selling, and renting properties in the most sought-after neighborhoods. Our team’s mission is to ensure a smooth, transparent, and rewarding real estate experience.
            </p>
            <p className='mb-4 text-slate-700 text-lg'>
              Our experienced agents provide personalized service and expert advice, backed by a deep understanding of the local market. We strive to make each real estate transaction seamless and enjoyable.
            </p>
          </div>
          <div>
            <div className='flex items-start mb-6'>
              <FaMapMarkerAlt className='text-teal-600 mr-4 text-3xl' />
              <p className='text-slate-700 text-lg'>
                Extensive local knowledge and expertise in the most desirable neighborhoods.
              </p>
            </div>
            <div className='flex items-start mb-6'>
              <FaStar className='text-teal-600 mr-4 text-3xl' />
              <p className='text-slate-700 text-lg'>
                Award-winning service with a focus on exceeding client expectations.
              </p>
            </div>
            <div className='flex items-start mb-6'>
              <FaUsers className='text-teal-600 mr-4 text-3xl' />
              <p className='text-slate-700 text-lg'>
                A dedicated team of professionals committed to your real estate success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-16'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-6 text-slate-800 text-center'>What Our Clients Say</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='text-center px-4'>
                <p className='text-slate-700 text-lg mb-4'>" {testimonial.text} "</p>
                <p className='text-teal-600 font-semibold'>- {testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <div className='py-16 px-4 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-slate-800'>Get in Touch</h2>
        <p className='mb-6 text-slate-700 text-lg'>
          Ready to start your real estate journey? Contact us today to learn how we can assist you.
        </p>
        <a href='/contact' className='bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700'>Contact Us</a>
      </div> */}
    </div>
  );
}
