import React from "react";
import { Button, Separator } from "reakit";


class Calculator extends React.Component {

state={
    numberClicked:"",
   firstNumber : 0,
   secondNumber : 0,
   operator : "",
   result : 0,
   isOperatorChosen : false,
   isCalculated : false,
}

componentDidMount(){
  this.setState({
    firstNumber : "",
    secondNumber : "",
    operator : "",
    isOperatorChosen : false,
    isCalculated : false
    })
  

}

onClick =(number)=>{
if (this.state.isCalculated){
  return false; 
}

if(this.state.isOperatorChosen){
this.setState({
  secondNumber:this.state.secondNumber+number.value,
})
}else{
  this.setState({
  firstNumber: this.state.firstNumber+number.value
})         
}

}

operationClick(operator){

}



  render() {
    return (

      <div id="wholeRender">
      <h3>React - Calculator</h3>
<div style={containerStyle}>

  <br/>
  <div id="numberBox">
           <Button id="Button-1" value="1"
           >
              <span>1</span>
            </Button>
            <Button id="Button-2" value="2"
            numberClick={this.state.numberClick}
            >
              <span>2</span>
            </Button>
            <Button id="Button-3" value="3"
            numberClick={this.state.numberClick}
            >
              <span>3</span>
            </Button>
            <br />
            <br />
            <Button id="Button-4" value="4"
            numberClick={this.state.numberClick}
            >
              <span>4</span>
            </Button>
            <Button id="Button-5" value="5"
            numberClick={this.state.numberClick}
            >
              <span>5</span>
            </Button>
            <Button id="Button-6" value="6"
            numberClick={this.state.numberClick}
            >
              <span>6</span>
            </Button>
            <br />
            <br />
            <Button id="Button-7" value="7">
              <span>7</span>
            </Button>
            <Button id="Button-8" value="8">
              <span>8</span>
            </Button>
            <Button id="Button-9" value="9">
              <span>9</span>
            </Button>
            <br />
            <br />
            <Button id="Button-0" value="0">
              <span>0</span>
            </Button>
            
            <br />
            <br />
        </div>

        <Separator orientation="vertical"/>
        <div id="operationRow">
          {/* <Separator/> */}
            <Button id="Button-multiply" value="times">
              <span>&times;</span>
            </Button>

            <Button id="Button-minus" value="minus">
              <span>&minus;</span>
            </Button>
            <br />
            <br />
            <Button id="Button-plus" value="plus">
              <span>+</span>
            </Button>
            <Button id="Button-divide" value="divide">
              <span>&divide;</span>
            </Button>

            <br />
            <br />
            <Button id="Button-power" value="power">
              <span>^</span>
            </Button>
            <Button id="Button-equal" value="equals">
              <span>=</span>
            </Button>
            <br />
            <br />
            <Button id="Button-clear" value="clear">
              <span>clear</span>
            </Button>
            </div>
      </div>
      <div>
          <div>
            <h3 >Result</h3>
            <div >
              <span id="first-number"
              firstNumber={this.state.firstNumber}></span>
              <span id="operator"></span>
              <span id="second-number"
              secondNumber={this.state.secondNumber}
              ></span>
              <hr />
              <span id="result"></span>
            </div>
          </div>
        </div>
      </div> //endrender
       
    );
  }
}



const containerStyle={
  'display':'flex',
  'flex-direction':'row'
}

const boxStyle={
  "display":"block"
}


export default Calculator;
