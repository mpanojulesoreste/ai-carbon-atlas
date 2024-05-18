import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import blogImage1 from './images/bg.jpg';
import blogImage2 from './images/image_generation.png';
import blogImage3 from './images/grammar_checkers.png';
import blogImage4 from './images/chatbot.jpg';
import blogImage5 from './images/video_production.png';
import blogImage6 from './images/voice_generation.jpg';
import blogImage7 from './images/scheduling.png';
import blogImage8 from './images/transcr_meeting.png';
import blogImage9 from './images/task_project.png';
import blogImage10 from './images/content.png';

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
                <span className="cat">Programs that uses natural language processing (NLP) and machine learning to simulate human-like interactions with people. </span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage2})` }}></span>
              <div className="desc">
                <h3>Image Generation</h3>
                <span className="cat">Software applications that use AI and ML to create images from scratch ortransform existing ones.</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage3})` }}></span>
              <div className="desc">
                <h3>Grammar Checkers</h3>
                <span className="cat">These tools use AI to automatically analyze text and identify and correct grammatical errors and sppelling mistakes.</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage5})` }}></span>
              <div className="desc">
                <h3>Video Production</h3>
                <span className="cat">These tools use machine learning to create video content from user prompts.</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage6})` }}></span>
              <div className="desc">
                <h3>Voice & Music Generation</h3>
                <span className="cat">These tools use machine learning and large amounts of training audio data to create new audio content</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage7})` }}></span>
              <div className="desc">
                <h3>Scheduling</h3>
                <span className="cat">These tools use artificial intelligence to hekp with time management and productivity</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage8})` }}></span>
              <div className="desc">
                <h3>Transcription and Meeting Assistants</h3>
                <span className="cat">These tools use artificial intelligence to help with meetings, from scheduling to summaries</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage9})` }}></span>
              <div className="desc">
                <h3>Task & Project Management</h3>
                <span className="cat">These tools use artificial inelligence to improve the efficiency, accuracy, and organization of project management tasks.</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage10})` }}></span>
              <div className="desc">
                <h3>Content Creation</h3>
                <span className="cat">These tools use artificial intelligence to create written, visual, our audio content baed on text prompts.</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;