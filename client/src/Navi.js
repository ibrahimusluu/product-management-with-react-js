import React from "react";
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
  Button,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          {/* NavbarBrand is more proper way */}
          <Button href="/" color="primary">
            Product Management App
          </Button>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink
                  href="contact_form"
                  style={{
                    color: "black",
                    backgroundColor: "#E9ECEF",
                    adding: "10px",
                    marginLeft: "15px",
                    borderRadius: "5px",
                  }}
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/ibrahimusluu"
                  style={{
                    backgroundColor: "#5C636A",
                    color: "#fff",
                    padding: "10px",
                    marginLeft: "15px",
                    borderRadius: "5px",
                  }}
                >
                  MY GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <CartSummary
              removeFromCart={this.props.removeFromCart}
              cart={this.props.cart}
            />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
