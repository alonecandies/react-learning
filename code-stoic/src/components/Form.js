import PropTypes from "prop-types";
import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      value1: "",
    };
  }
  static propTypes = {};
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleChange1 = (event) => {
    this.setState({
      value1: event.target.value,
    });
  };
  handleSubmit = (event) => {
     event.preventDefault();
    console.log({ fname: this.state.value, lname: this.state.value1 });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          value={this.state.value1}
          onChange={this.handleChange1}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
