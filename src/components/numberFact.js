import React, {Component} from "react";
import { render } from "@testing-library/react";




// function NumberFact(){
   
class NumberFact extends Component{
        render(){
            let {fact}=this.props;
            // let {fact}=props.fact;
            console.log("component render fact: "+fact);
            
            return(
            <div className="numberFact" style={testStyle}>
            <p>{fact}</p>
            </div>
            )
        }
    }

 

const testStyle={
    "border":"5px solid red"
}

export default NumberFact;



// class NumberFact extends React.Component{

    // state={
    //     number:this.props,
    //     fact:""
    // }


    // componentDidMount(){

    //     let {number}=this.props;
    //     //returns nothing
    //     console.log("componentDidMount.number: "+number);
    //     //so does this
    //     console.log("componentDidMount this.state.number: "+this.state.number);
        
    //     this.setState({
    //         fact:this.getNumberTrivia(number)
    //     })
    // }

    // render(){
    //     let number=this.props;
    //     console.log("this.state.fact: "+this.state.fact);
    //     let {fact}=this.getNumberTrivia(number);
    //     console.log("render.fact: "+fact);

// }
