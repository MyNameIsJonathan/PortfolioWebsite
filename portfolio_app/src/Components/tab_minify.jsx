import React from 'react';

const Minify = props => {
  return (
    <div id="Minify" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align spotify-green-background">
          minify
        </h3>
        <span className="subtitle spotify-green">A Mini Spotify Player</span>
      </div>
      <div className="minify-container">
        <img
          className="minify-gif"
          src="./assets/Minify.gif"
          alt="GIF of minify, my mini spotify player application, in use"
        />
        <div className="tab-information">
          <h3 className="spotify-green information">Information</h3>
        </div>
      </div>
    </div>
  );
};

export default Minify;
