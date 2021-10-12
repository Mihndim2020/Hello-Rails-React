import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* Greeting: {this.props.greetings} */}
        <h1>This is a greeting message</h1>
      </React.Fragment>
    );
  }
}
Greeting.propTypes = {
  greeting = PropTypes.string
};

export default Greeting
