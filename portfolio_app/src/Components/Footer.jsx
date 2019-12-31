import React from 'react';

import { ReactComponent as GitHubLogo } from './github.svg';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';
import { ReactComponent as EmailLogo } from './email.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container footer-top">
          <div className="row valign-wrapper">
            <div className="col s4 valign-wrapper contact-container">
              <h5 className="contact">Contact</h5>
            </div>
            <div className="col s8">
              <ul className="collection">
                <li className="collection-item">
                  <EmailLogo />
                  {/* jonathanholson@gmail.com */}
                  <span className="footer-contact-text">
                    jonathanholson@gmail.com
                  </span>
                </li>
                <li className="collection-item">
                  <span className="footer-contact-icon">
                    <GitHubLogo />
                  </span>
                  <span className="footer-contact-text center-align">
                    MyNameIsJonathan
                  </span>
                  {/* <span className="footer-contact-text">MyNameIsJonathan</span> */}
                </li>
                <li className="collection-item">
                  <span className="footer-contact-icon">
                    <LinkedInLogo />
                  </span>
                  <span className="footer-contact-text">Jonathan Olson</span>
                  {/* <p className="footer-contact-text col s8">Jonathan Olson</p> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright footer-bottom">
          <div className="container center-align">© Jonathan Olson</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
