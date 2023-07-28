import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { Component } from "react";
import alertify from "alertifyjs";
import { Routes, Route, Switch } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";
import ContactForm from "./ContactForm";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to the Cart.", 3);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);

    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from the Cart!", 3);
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                info={categoryInfo}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              />
            </Col>
            <Col xs="9">
              {/* Switch was deprecated, use "Routes" */}
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      info={productInfo}
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      addToCart={this.addToCart}
                    />
                  }
                  // React Router v4
                  // render={(props) => {
                  //   <ProductList
                  //     {...props}
                  //     info={productInfo}
                  //     currentCategory={this.state.currentCategory}
                  //     products={this.state.products}
                  //     addToCart={this.addToCart}
                  //   />;
                  // }}
                />
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                  // React Router v4
                  // render={(props) => {
                  //   <CartList
                  //     {...props}
                  //     cart={this.state.cart}
                  //     removeFromCart={this.removeFromCart}
                  //   />;
                  // }}
                />
                <Route exact path="/contact_form" element={<ContactForm />} />
                <Route element={NotFound} />
                {/* component deprecated, use "element" instead */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
