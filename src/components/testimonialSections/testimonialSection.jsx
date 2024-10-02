import React from 'react';
import Img from '../../assets/Rectangle 31.png'
import Img1 from '../../assets/Ellipse 9.png'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Ariyana aly',
      title: 'Top Customer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis.',
      date: '02-04-2022',
    },
    {
      name: 'Ariyana aly',
      title: 'Top Customer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis.',
      date: '02-04-2022',
    },
    {
      name: 'Ariyana aly',
      title: 'Top Customer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis.',
      date: '02-04-2022',
    },
  ];

  return (
    <section className="relative mb-[14rem]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Img}
          alt="City Skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white mb-8 max-w-xl leading-tight">
          See what our customers said about us
        </h2>


      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative top-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 ">
              <div className="flex items-center mb-4">
                <img
                  src={Img1}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{testimonial.content}</p>
              <p className="text-gray-700 text-xs">Date: {testimonial.date}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default TestimonialSection;