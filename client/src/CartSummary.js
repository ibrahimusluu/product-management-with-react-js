import { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                onClick={() => this.props.removeFromCart(cartItem.product)}
                color="danger"
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle>Empty Cart</DropdownToggle>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
