import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ClassEvent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count : 0
      }
   }
  static propTypes = {}
   handleClick = () => {
      this.setState({
         count : this.state.count + 1
      })
      console.log("Clicked");
   }
  render() {
    return (
      <React.Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleClick}>Click Me</button>
      </React.Fragment>
    );
  }
}

export default ClassEvent