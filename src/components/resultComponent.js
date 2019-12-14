import React, { Component } from "react";
import {
  // Button,
  // Popup
  // Grid
  // Segment
} from "semantic-ui-react";

class ResultComponent extends Component {
  render(props) {
    let { result } = this.props;
    return (
      
      <div id="result" style={resultStyle}>
        <p>{result}</p>
        </div>      
    );
  }
}

const resultStyle = {
  // border: "1px solid black",
  height: "100%"
};

export default ResultComponent;
