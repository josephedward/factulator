import React, { Component } from "react";
import ResultComponent from "./components/resultComponent";
import KeyPadComponent from "./components/keypadComponent";
import NumberFact from "./components/numberFact";
import axios from "axios";
// var Parser = require("expr-eval").Parser;
import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      fact: ""
    };

    // this.update = this.update.bind(this);
  }

  async getNumberTrivia(number) {
    //defaults to trivia if type unspecified
    // hit http://numbersapi.com/number/type to get a plain text response
    let newFact = await axios
      .get(`http://numbersapi.com/${number}/trivia`)
      .then(res => {
        return res.data;
      });
    this.setState({
      result:"",
      fact: newFact
    });
    console.log("getNumberTrivia newfact: " + newFact);

    return newFact;
  }

  update = button => {
    this.setState({
      result: this.state.result + button
    });
    console.log("update");
    return this.getNumberTrivia(this.state.result);
  };

  onClick = button => {
    // this.update(button);

    switch (button) {
      case "=": {
        this.calculate();
        console.log("onclick switch_case(=)");
        break;
      }
      case "C": {
        this.reset();
        break;
      }
      case "delete": {
        this.backspace();
        break;
      }
      case "trivia": {
        this.getNumberTrivia(this.state.result);
        break;
      }
      default: {
        this.setState({
          result: this.state.result + button
        });
        // this.getNumberTrivia(button);
        console.log("onclick default");
        // this.update(button);
      }
    }
  };

  calculate = () => {
    try {
      this.setState(
        {
          result: (math.evaluate(this.state.result) || "") + ""
        },
      );

      console.log("calculate test" + this.state.result);
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
          <h4>Click the 'trivia' button to see facts about your favorite numbers!</h4>
          <KeyPadComponent onClick={this.onClick} result={this.state.result} />
          <br/>
          <div style={box2}>
          <p>Result:</p>
          <ResultComponent result={this.state.result} onChange={this.update} />
          <p>Fact:</p>
          <NumberFact fact={this.state.fact} />
          </div>
        </div>
      </div>
    );
  }
}

const mainStyle = {
  width: "60%",
  textAlign: "center",
  float: "center",
  margin: "auto",
  border: "20px solid black",
  padding: "10px",
  background: "white"
};

const box2={
  border: "5px solid black"
}

export default Calculator;
