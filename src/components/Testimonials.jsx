import React from 'react';
import testimonialsImage1 from '../assets/img/testimonials-1.jpg';
import testimonialsImage2 from '../assets/img/testimonials-2.jpg';
import testimonialsImage3 from '../assets/img/testimonials-3.jpg';




const Testimonials = () => {
  const testimonials = [
    {
      name: 'Margaret E.',
      feedback: '"This is fantastic! Thanks so much guys!"',
      image: testimonialsImage1,
    },
    {
      name: 'Fred S.',
      feedback: '"Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages."',
      image: testimonialsImage2,
    },
    {
      name: 'Sarah W.',
      feedback: '"Thanks so much for making these free resources available to us!"',
      image: testimonialsImage3 ,
    },
  ];

  return (
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4" key={index}>
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h5>{testimonial.name}</h5>
                <p className="font-weight-light mb-0">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
