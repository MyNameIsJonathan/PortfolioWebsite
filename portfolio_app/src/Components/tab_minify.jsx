import React from 'react';

const Minify = props => {
  return (
    <div id="Minify" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align spotify-green-background">
          minify
        </h3>
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
                for songs, albums, artists, and playlists and was packaged via
                Electron.js for distribution.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category spotify-green-background">
                Future Steps:
              </span>
              <span className="information-text">
                Future steps will expand functionality to create a full drop-in
                replacement Spotify desktop application and to improve app
                dynamics and feel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minify;
