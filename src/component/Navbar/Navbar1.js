import React, { useState } from 'react';
import Navbar2 from './Navbar2'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Button
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>


        <Container>
          <Navbar expand="xl" light className="mt-3">
            <NavbarBrand >
              <Link to="/" className="d-flex logo" > <img src="/assets/logo.svg" alt="" />
                <div className="ne my-auto ml-2">LaslesVPN</div></Link>

            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link to="Navbar1">
                    About
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="Section1">
                    Features
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="Navbar2">
                    Pricing
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="Navbar2">
                    Testimonials
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">
                    <Link to="Navbar2">
                    Help
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
              <NavbarText>
                <Button className="In px-4 py-2">Sign In</Button>
                <Button className="Up px-4 py-2">Sign Up</Button>
              </NavbarText>
            </Collapse>
          </Navbar>
        </Container>



        <Switch>
          <Route path="/Navbar1">
            <Navbar1 />
          </Route>
         
        </Switch>





      </div>

    </Router>
  );
}

export default Navbar1;
