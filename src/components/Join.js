// Join.js
import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className="join-container">
      <h1 className="join-title">Join the AI Carbon Atlas Community</h1>
      <p className="join-description">
        At AI Carbon Atlas, we believe in the power of collaboration and collective action to create a more sustainable future. By joining our community, you can contribute to the development of innovative tools and solutions that help individuals and organizations make informed decisions about their AI carbon footprint.
      </p>
      <div className="join-section">
        <h2 className="section-title">Upcoming Browser Extension</h2>
        <p className="section-description">
          We are excited to announce our plans to develop a groundbreaking browser extension that will empower individuals to track and monitor the carbon emissions they generate while using AI tools. This extension will provide real-time insights into the environmental impact of your AI activities, enabling you to make more eco-conscious choices.
        </p>
        <p className="section-description">
          By joining our community today, you will be among the first to know about the launch of our browser extension and have the opportunity to provide valuable feedback and suggestions to shape its development. Together, we can create a powerful tool that promotes transparency and encourages sustainable AI practices.
        </p>
      </div>
      <div className="join-section">
        <h2 className="section-title">Benefits of Joining</h2>
        <ul className="join-benefits">
          <li>Stay informed about the latest advancements in sustainable AI technologies</li>
          <li>Receive early access to our upcoming browser extension</li>
          <li>Participate in exclusive webinars and workshops on AI carbon footprint reduction</li>
          <li>Connect with like-minded individuals and organizations passionate about sustainable AI</li>
          <li>Contribute to the development of industry standards and best practices</li>
        </ul>
      </div>
      <div className="join-cta">
        <h2 className="cta-title">Ready to Make a Difference?</h2>
        <p className="cta-description">
          Sign up now to join the AI Carbon Atlas community and be part of the movement towards a more sustainable future driven by responsible AI adoption.
        </p>
        <a href="https://www.thejustdatalab.com/get-involved" className="cta-button">Join Now</a>
      </div>
    </div>
  );
};

export default Join;