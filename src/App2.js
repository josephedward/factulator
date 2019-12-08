import React, { Component } from "react";
import ResultComponent from "./components/resultComponent";
import KeyPadComponent from "./components/keypadComponent";
import NumberFact from "./components/numberFact";
import axios from "axios";
import { isThisTypeAnnotation } from "@babel/types";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      fact:""
    };
  }

async getNumberTrivia(number){
    //defaults to trivia if type unspecified
    // hit http://numbersapi.com/number/type to get a plain text response
 let newFact= await axios.get(`http://numbersapi.com/${number}/trivia`)
 .then(res=>{
    //remember to grab just what you need -> res.data
    console.log(res.data);
    return res.data
});
    console.log("getNumberTrivia newFact: "+newFact);
    this.setState({
        fact:newFact
    })
    return newFact;
}

async setFact(){
    let tempFact=await this.getNumberTrivia(this.state.result);
    this.setState({
        fact:tempFact
    })

}

// componentDidUpdate(){
//     this.setFact();
// }

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
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
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
    console.log("main render this.state.fact: "+this.state.fact)
    return (
      <div>
        <div className="calculator-body">
          <h1>Factulator</h1>
          <ResultComponent result={this.state.result}
            />
          <KeyPadComponent onClick={this.onClick} />
          <NumberFact 
          
          fact={this.state.fact}

          />
        </div>
      </div>
    );
  }
}

export default App;
