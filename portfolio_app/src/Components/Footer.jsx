import React from 'react';

import { ReactComponent as GitHubLogo } from './github.svg';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';
import { ReactComponent as EmailLogo } from './email.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="row valign-wrapper footer-inner">
          <div className="valign-wrapper contact-container">
            <h5 className="contact">Contact</h5>
          </div>
          <ul className="collection">
            <li className="collection-item valign-wrapper">
              <EmailLogo />
              <span className="footer-contact-text valign-wrapper">
                JonathanHOlson@gmail.com
              </span>
            </li>
            <li className="collection-item valign-wrapper">
              <GitHubLogo />
              <span className="footer-contact-text valign-wrapper">
                MyNameIsJonathan
              </span>
            </li>
            <li className="collection-item valign-wrapper">
              <LinkedInLogo />
              <span className="footer-contact-text valign-wrapper">
                Jonathan Olson
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-copyright footer-bottom">
          <div className="container center-align">© Jonathan Olson</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
