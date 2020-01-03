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
                <a href="#PageOne" className="tab-title">
                  home
                </a>
              </li>
              <li className="tab col s4">
                <a href="#PageTwo" className="tab-title">
                  nhl
                </a>
              </li>
              <li className="tab col s4">
                <a href="#PageThree" className="tab-title">
                  minify
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
