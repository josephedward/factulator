import React, { Component } from "react";
import ResultComponent from "./components/resultComponent";
import KeyPadComponent from "./components/keypadComponent";
import NumberFact from "./components/numberFact";
import axios from "axios";
import safeEval from "safe-eval";

class App extends Component {
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
      .get(`http://numbersapi.com/${number}/trivia`)
      .then(res => {
        console.log(res.data);
        return res.data;
      });
    console.log("getNumberTrivia newFact: " + newFact);
    this.setState({
      fact: newFact
    });
    return newFact;
  }

  async setFact() {
    let tempFact = await this.getNumberTrivia(this.state.result);
    this.setState({
      fact: tempFact
    });
  }

  onClick = button => {
    this.setFact();

    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
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
        result: (JSON.parse(JSON.stringify(this.state.result)) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    // console.log("main render this.state.fact: " + this.state.fact);
    return (
      <div id="mainRender" style={mainStyle}>
        <div className="calculator-body">
          <h1>Factulator</h1>
          {/* <br/> */}
          <p>Controls:</p>
          {/* <br/> */}
          <KeyPadComponent onClick={this.onClick} />
          {/* <br/> */}
          <p>Result:</p>
          {/* <br/> */}
          <ResultComponent result={this.state.result} />
          {/* <br/> */}
          <p>Fact:</p>
          {/* <br/> */}
          <NumberFact fact={this.state.fact} />
        </div>
      </div>
    );
  }
}

const mainStyle={
  "width":"25%",
  "text-align": "center",
  float: "center",
  margin: "auto",
  "border":"1px solid black",
  "padding":"10px",

}

export default App;
