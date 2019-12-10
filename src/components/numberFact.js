import React, { Component } from "react";

class NumberFact extends Component {
  render() {
    let { fact } = this.props;
    // let {fact}=props.fact;
    console.log("component render fact: " + fact);

    return (
      <div id="numberFact" style={testStyle}>
        <p>{fact}</p>
      </div>
    );
  }
}

const testStyle = {
  border: "1px solid black"
};

export default NumberFact;
