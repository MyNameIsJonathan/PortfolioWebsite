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
              <a href="#PageOne" className="tab-title">
                Home
              </a>
            </li>
            <li className="tab col s4">
              <a href="#PageTwo" className="tab-title">
                NHL
              </a>
            </li>
            <li className="tab col s4">
              <a href="#PageThree" className="tab-title">
                Minify
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
