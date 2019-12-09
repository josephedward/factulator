import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result" style={resultStyle}>
                <p>{result}</p>
            </div>
    )
        ;
    }
}


const resultStyle={

        "border":"5px solid red"
}

export default ResultComponent;