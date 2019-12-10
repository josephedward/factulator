import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div id="result" style={resultStyle}>
                <p>{result}</p>
            </div>
    )
        ;
    }
}


const resultStyle={

        "border":"1px solid black"
}

export default ResultComponent;