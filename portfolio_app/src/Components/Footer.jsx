import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container footer-top">
          <div className="row">
            <div className="col s3">
              <h5 className="black-text">Contact</h5>
            </div>
            <div className="col s9">
              <ul>
                <li>
                  <i className="material-icons">email</i>
                  jonathanholson@gmail.com
                </li>
                <li>
                  <link rel="icon" href="%PUBLIC_URL%/github.svg" />
                </li>
                <li>
                  <link rel="icon" href="%PUBLIC_URL%/linkedin.svg" />
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
