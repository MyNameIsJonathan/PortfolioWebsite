import React from 'react';
import M from 'materialize-css';

class Navbar extends React.Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs, { swipeable: true });
  }

  render() {
    return (
      <header>
        <nav>
          <div className="valign-wrapper">
            <h1 className="navbar-name center-align">
              jonathan <span className="last-name">olson</span>
            </h1>
          </div>
          <div className="row">
            <ul
              ref={Tabs => {
                this.Tabs = Tabs;
              }}
              id="tabs"
              className="tabs"
            >
              <li className="tab col s4">
                <a href="#aboutMe" className="tab-title">
                  home
                </a>
              </li>
              <li className="tab col s4">
                <a href="#NHL" className="tab-title">
                  nhl
                </a>
              </li>
              <li className="tab col s4">
                <a href="#Minify" className="tab-title">
                  minify
                </a>
              </li>
              <li className="tab col s4">
                <a href="#FEC" className="tab-title">
                  music player
                </a>
              </li>
              <li className="tab col s4">
                <a href="#SDC" className="tab-title">
                  backend
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
