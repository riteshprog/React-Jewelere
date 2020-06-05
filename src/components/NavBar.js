import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar color="transparent" dark expand="md">
              <MDBNavbarBrand href="/">
              <span className="text-light">dimend</span><span className="text-smallcaps">scaasi</span>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center className="nav-center">
                <MDBNavItem>
              <MDBNavLink to="/">Diamonds</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="/">Accessories</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Fine Jewelery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">WATCHES</MDBNavLink>
            </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon icon="search" />
</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon icon="heart" />
</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">                <MDBIcon icon="user" />
</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavBar;


