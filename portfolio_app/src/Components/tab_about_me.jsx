import React from 'react';

const AboutMe = props => {
  return (
    <div id="aboutMe" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <a
          href="https://www.linkedin.com/in/jonathan-h-olson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3
            className="tab-head valign-wrapper center-align about-me-blue-background"
            id="about-me-link"
          >
            about me
          </h3>
        </a>
        <span className="subtitle about-me-blue">
          full stack software engineer
        </span>
      </div>
      <div className="left-image-container row">
        <div className="col s12 l5 center-align">
          <img
            className="me-image"
            src="./assets/me.jpeg"
            alt="Me, wearing a suit, hands folded in a professional setting"
          />
        </div>
        <div className="tab-information col s12 l7">
          <h3 className="about-me-blue information">jonathan/jay</h3>
          <div className="collection">
            <div className="collection-item">
              <span className="information-category about-me-blue-background">
                Background:
              </span>
              <span className="information-text">
                I grew up in the service industry, spent time working in
                biochemical research, and have been learning software
                engineering for just over two years.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category about-me-blue-background">
                Interests:
              </span>
              <span className="information-text≈border">
                I love playing hockey, making (and drinking) coffee, playing the
                drums, woodworking, playing board games, and going to the beach.
                With experience across the stack, I love everything from scaling
                backend infrastructures on AWS and GCP to heavily optimizing
                React state updates/re-rendering.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category about-me-blue-background">
                Personal Goal:
              </span>
              <span className="information-text">
                I want to start my own sofware company within the next 10 years
                and am looking for a fast-paced team tackling complex
                engineering challenges, while emphasizing personal growth.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
