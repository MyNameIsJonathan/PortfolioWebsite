import React from 'react';
import M from 'materialize-css';

class Navbar extends React.Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <nav>
        <div className="valign-wrapper">
          <h1 className="navbar-name center-align">JONATHAN OLSON</h1>
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
              <a href="#home" className="tab-title">
                Home
              </a>
            </li>
            <li className="tab col s4">
              <a href="#part-1" className="tab-title">
                NHL Webpage
              </a>
            </li>
            <li className="tab col s4">
              <a href="#part-2" className="tab-title">
                Minify
              </a>
            </li>
          </ul>
        </div>

        <div id="home" className="col s12 blue">
          Home
        </div>
        <div id="part-1" className="col s12 red">
          Part 2
        </div>
        <div id="part-2" className="col s12 green">
          Part 2
        </div>
      </nav>
    );
  }
}

export default Navbar;
