import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import blogImage1 from './images/bg.jpg';
import blogImage2 from './images/image_generation.png';
import blogImage3 from './images/blog-3.jpg';
import blogImage4 from './images/chatbot.jpg';

const LandingPage = () => {
  return (
    <div id="fh5co-blog" className="blog-flex">
      <div className="featured-blog" style={{ backgroundImage: `url(${blogImage1})` }}>
        <div className="desc-t">
          <div className="desc-tc">
            <h3>
              <h3>Navigate the Carbon Footprint of AI, One Tool at a Time</h3>
            </h3>
          </div>
        </div>
      </div>
      <div className="blog-entry fh5co-light-grey">
        <div className="row animate-box">
          <div className="col-md-12">
            <h2>Categories</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <Link to="/chatbot" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage4})` }}></span>
              <div className="desc">
                <h3>Chatbots</h3>
                <span className="cat">This tool does this...</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage2})` }}></span>
              <div className="desc">
                <h3>Image Generation</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage3})` }}></span>
              <div className="desc">
                <h3>Grammar Checkers</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>Video Production</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage2})` }}></span>
              <div className="desc">
                <h3>Voice & Music Generation</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>Scheduling</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>Transcription and Meeting Assistants</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>Task & Project Management</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>Content Creation</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;