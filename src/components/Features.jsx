import React from 'react';
import Image1 from '../assets/img/bg-showcase-1.jpg';
import Image2 from '../assets/img/bg-showcase-2.jpg';
import Image3 from '../assets/img/bg-showcase-3.jpg';




const Features = () => {
  // Features for the first section
  const iconFeatures = [
    {
      icon: 'bi-window',
      title: 'Fully Responsive',
      description: 'This theme will look great on any device, no matter the size!',
     
    },
    {
      icon: 'bi-layers',
      title: 'Bootstrap 5 Ready',
      description: 'Featuring the latest build of the new Bootstrap 5 framework!',
    },
    {
      icon: 'bi-terminal',
      title: 'Easy to Use',
      description: 'Ready to use with your own content, or customize the source files!',
    },
  ];

  // Features for the showcase section
  const showcaseFeatures = [
    {
      title: 'Fully Responsive Design',
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      image: Image1,
      reverse: true,
    },
    {
      title: 'Updated For Bootstrap 5',
      description:
        "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      image: Image2,
      reverse: false,
    },
    {
      title: 'Easy to Use & Customize',
      description:
        "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      image : Image3,
      reverse: true,
    },
  ];

  return (
    <div>
      {/* First Features Section */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {iconFeatures.map((feature, index) => (
              <div className="col-lg-4" key={index}>
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className={`${feature.icon} m-auto text-primary`}></i>
                    
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="lead mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="container-fluid p-0">
          {showcaseFeatures.map((feature, index) => (
            <div className="row g-0" key={index}>
              <div
                className={`col-lg-6 ${feature.reverse ? 'order-lg-2' : ''} text-white showcase-img`}
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <div className={`col-lg-6 ${feature.reverse ? 'order-lg-1' : ''} my-auto showcase-text`}>
                <h2>{feature.title}</h2>
                <p className="lead mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
