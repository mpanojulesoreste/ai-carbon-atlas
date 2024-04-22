import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import blogImage1 from './images/blog-1.jpg';
import blogImage2 from './images/blog-2.jpg';
import blogImage3 from './images/blog-3.jpg';

const LandingPage = () => {
  return (
    <div id="fh5co-blog" className="blog-flex">
      <div className="featured-blog" style={{ backgroundImage: `url(${blogImage1})` }}>
        <div className="desc-t">
          <div className="desc-tc">
            <span className="featured-head">AI is Hurting the Environment...</span>
            <h3>
              <h3>See how much Carbon Dioxide AI Tools Produces </h3>
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
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage2})` }}></span>
              <div className="desc">
                <h3>CHATBOTS</h3>
                <span className="cat">This tool does this...</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>IMAGE GENERATION</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage3})` }}></span>
              <div className="desc">
                <h3>GRAMMAR CHECKERS</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>JJJJJJ</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage2})` }}></span>
              <div className="desc">
                <h3>JJJJJJJJJ</h3>
                <span className="cat">This tool does this..</span>
              </div>
            </Link>
          </div>
          <div className="col-md-12 animate-box">
            <Link to="#" className="blog-post">
              <span className="img" style={{ backgroundImage: `url(${blogImage1})` }}></span>
              <div className="desc">
                <h3>HHHHHHHHHHH</h3>
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