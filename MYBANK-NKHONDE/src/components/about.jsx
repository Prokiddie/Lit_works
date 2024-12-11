import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-xl mb-8">
          At MYBANK NKHONDE, we are dedicated to providing innovative financial solutions to empower communities. We believe in a future where everyone has access to financial tools that help them save, grow, and secure their future.
        </p>
        <div className="text-left mx-auto max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p>We aim to bridge the financial gap in underserved communities by providing accessible, secure, and efficient banking services that enhance the lives of our clients.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
