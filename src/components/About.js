// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About AI Carbon Atlas</h1>
      <p className="about-description">
        AI Carbon Atlas is a comprehensive platform dedicated to providing transparent and reliable information about the carbon footprint of various AI tools and technologies. Our mission is to empower individuals and organizations to make environmentally conscious decisions when adopting and using AI solutions.
      </p>
      <div className="about-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          We envision a future where AI innovation goes hand in hand with environmental sustainability. By raising awareness about the carbon impact of AI technologies, we aim to foster a global community that prioritizes the development and adoption of eco-friendly AI practices.
        </p>
      </div>
      <div className="about-section">
        <h2 className="section-title">Our Approach</h2>
        <p className="section-description">
          At AI Carbon Atlas, we employ a rigorous research methodology to collect, analyze, and present data on the carbon footprint of AI tools. Our team of experts collaborates with industry leaders, academic institutions, and environmental organizations to ensure the accuracy and reliability of the information we provide.
        </p>
      </div>
      <div className="about-section">
        <h2 className="section-title">Our Commitment</h2>
        <p className="section-description">
          We are committed to continuously updating and expanding our database to cover the latest AI technologies and trends. We strive to be a trusted resource for individuals, businesses, and policymakers, empowering them to make informed decisions that contribute to a more sustainable future.
        </p>
      </div>
    </div>
  );
};

export default About;