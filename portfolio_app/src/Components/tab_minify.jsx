import React from 'react';

const Minify = props => {
  return (
    <div id="Minify" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <a
          href="https://github.com/MyNameIsJonathan/Minify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3
            className="tab-head valign-wrapper center-align spotify-green-background"
            id="minify-link"
          >
            minify
          </h3>
        </a>
        <span className="subtitle spotify-green">a mini Spotify player</span>
      </div>
      <div className="left-image-container row">
        <div className="col s12 l5 center-align">
          <img
            className="minify-gif"
            src="./assets/Minify.gif"
            alt="GIF of minify, my mini spotify player application, in use"
          />
        </div>
        <div className="tab-information col s12 l7">
          <h3 className="spotify-green information">information</h3>
          <div className="collection">
            <div className="collection-item">
              <span className="information-category spotify-green-background">
                Technologies:
              </span>
              <span className="information-text">
                React, Spotify API, Express, Google Cloud Platform, HTTPS
                Encrypted Communication, and more.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category spotify-green-background">
                Inspiration:
              </span>
              <span className="information-text">
                I've wanted a smaller Spotify application for as long as I can
                remember but could never find one -- so I buit it. This app
                allows users to control playback (play, pause, skip, jump back,
                scrub, save song to library, toggle repeat) and search Spotify
                for songs, albums, artists, and playlists. Built in ES6
                Javascript and React, I packaged the app into an OSX application
                using Electron.js.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category spotify-green-background">
                Future Steps:
              </span>
              <span className="information-text">
                I will continually expand functionality to create a full drop-in
                replacement Spotify desktop application, while continuing to
                iterate on app dynamics and feel.
              </span>
            </div>
          </div>
          <div id="download-minify-container">
            <a
              href="assets/Minify-1.0.0.dmg"
              download="Minify.dmg"
              id="download-minify"
            >
              {/* <a className="waves-effect waves-light btn-small">
                <i className="material-icons left">cloud</i>
                button
              </a> */}
              <button
                id="download-minify"
                className="waves-effect waves-light btn"
                type="button"
              >
                {/* <img
                  src="assets/download.png"
                  alt="Download"
                  id="download-icon"
                /> */}
                <p className="download-text">Download Minify</p>
              </button>
            </a>
            <p id="download-size">File Size: 63.5 MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minify;
