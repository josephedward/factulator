import React, { Component } from "react";
import ResultComponent from "./components/resultComponent";
import KeyPadComponent from "./components/keypadComponent";
import NumberFact from "./components/numberFact";
import axios from "axios";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { Popup } from "semantic-ui-react";
import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      fact: "",
    };
  }

  async getNumberTrivia(number) {

    let newFact = await axios({
      method: "get",
            url:
        "https://corsproxy.io/?" +
        encodeURIComponent(
          "http://numbersapi.com/" + number + "/trivia"
        ),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });
    // console.log("getNumberTrivia newfact: " + newFact);
    this.setState({ fact: newFact.data });
    return newFact;
  }
 
  update = (button) => {
    this.setState({
      result: this.state.result + button,
    });
    console.log("update");
  };

  onClick = (button) => {
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
          result: this.state.result + button,
        });
        // this.getNumberTrivia(button);
        console.log("onclick default");
        // this.update(button);
      }
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (math.evaluate(this.state.result) || "") + "",
      });

      console.log("calculate test" + this.state.result);
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
      fact: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div id="mainRender" style={mainStyle}>
        <div className="calculator-body">
          <h1>Factulator</h1>
          <h4>
            Click the 'trivia' button to see facts about your favorite numbers!
          </h4>
          <KeyPadComponent onClick={this.onClick} result={this.state.result} />
          <br />
          <Popup
            trigger={
              <div style={box2}>
                <p>Result:</p>
                <KeyboardEventHandler
                  handleKeys={["numeric"]}
                  onKeyEvent={(key) => this.update(key)}
                />
                <ResultComponent
                  result={this.state.result}
                  onChange={this.update}
                />

                <p>Fact:</p>
                <NumberFact fact={this.state.fact} />
              </div>
            }
          >
            <Popup.Header>Keyboard</Popup.Header>
            <Popup.Content>
              Keyboard inputs can be utilized - numbers only! 😄
            </Popup.Content>
          </Popup>
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
  background: "white",
};

const box2 = {
  border: "5px solid black",
};

export default Calculator;
