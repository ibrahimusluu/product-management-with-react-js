import { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import alertify from "alertifyjs";

export default class ContactForm extends Component {
  state = { name: "", email: "", region: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success("Sent email to the address: " + this.state.email, 3);
    setTimeout(() => {
      alertify.error("We don't send email for now, maybe later :)");
    }, 4000);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Your name here..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address here..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="region">Region</Label>
            <Input
              type="select"
              name="region"
              id="region"
              placeholder="Your name here..."
              onChange={this.handleChange}
            >
              <option>Select Your City...</option>
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Amsterdam</option>
              <option>Berlin</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Your opinions..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    );
  }
}
