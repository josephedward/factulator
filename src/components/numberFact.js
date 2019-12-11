import React, { Component } from "react";
import {TextArea, Container} from "semantic-ui-react";

class NumberFact extends Component {



  render() {
    let { fact } = this.props;
    // let {fact}=props.fact;
    // console.log("component render fact: " + fact);

    return (
      <div id="numberFact" style={textStyle}>
        <p>{fact}</p>
      </div>
    );
  }
}




const textStyle = {
  border: "1px solid black",
  height:"100%"
};

export default NumberFact;
