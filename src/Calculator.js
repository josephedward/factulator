import React, { Component } from "react";
import ResultComponent from "./components/resultComponent";
import KeyPadComponent from "./components/keypadComponent";
import NumberFact from "./components/numberFact";
import axios from "axios";
var Parser = require("expr-eval").Parser;

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      fact: ""
    };
  }

  async getNumberTrivia(number) {
    //defaults to trivia if type unspecified
    // hit http://numbersapi.com/number/type to get a plain text response
    let newFact = await axios
      .get(
        `http://numbersapi.com/${number}/trivia`
      )
      .then(res => {
        return res.data;
      });
    this.setState({
      fact: newFact
    });

    return newFact;
  }

  onClick = button => {
    this.setState({
      result: this.state.result + button
    });
    this.getNumberTrivia(button);
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "delete") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (Parser.evaluate(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
      fact: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div id="mainRender" style={mainStyle}>
        <div className="calculator-body">
          <h1>Factulator</h1>
          <KeyPadComponent onClick={this.onClick} />
          <p>Result:</p>
          <ResultComponent result={this.state.result} />
          <p>Fact:</p>
          <NumberFact fact={this.state.fact} />
        </div>
      </div>
    );
  }
}

const mainStyle = {
  width: "45%",
  textAlign: "center",
  float: "center",
  margin: "auto",
  border: "20px solid black",
  padding: "10px",
  background: "lightgreen"
};

export default Calculator;
