import React, { Component } from "react";
import { Button, Separator } from "reakit";

class KeyPadComponent extends Component {
  render() {
    return (
      <div id="keyPad" style={keyPadCSS}>
        <div id="operationsButtons" style={kpColCss}>
          <Button
            id="Button-leftParenthetical"
            value="left parentheses"
            name="("
            onClick={e => this.props.onClick(e.target.name)}
          >
            (
          </Button>
          <Button
            id="Button-rightParenthetical"
            value="right parentheses"
            name=")"
            onClick={e => this.props.onClick(e.target.name)}
          >
            )
          </Button>
          <br />

          <Button
            id="Button-clear-everything"
            value="clear-everything"
            name="CE"
            onClick={e => this.props.onClick(e.target.name)}
          >
            CE
          </Button>
          <Button
            id="Button-clear"
            value="clear"
            name="C"
            onClick={e => this.props.onClick(e.target.name)}
          >
            C
          </Button>
          <br />
          <Button
            id="Button-plus"
            value="plus"
            name="+"
            onClick={e => this.props.onClick(e.target.name)}
          >
            +
          </Button>
          <Button
            id="Button-minus"
            value="minus"
            name="-"
            onClick={e => this.props.onClick(e.target.name)}
          >
            -
          </Button>
          <br />
          <Button
            id="Button-multiply"
            value="times"
            name="*"
            onClick={e => this.props.onClick(e.target.name)}
          >
            x
          </Button>

          <Button
            id="Button-divide"
            value="divide"
            name="/"
            onClick={e => this.props.onClick(e.target.name)}
          >
            /
          </Button>
          <br />
          <Button name="." onClick={e => this.props.onClick(e.target.name)}>
            .
          </Button>
          <Button
            id="Button-equal"
            value="equals"
            name="="
            onClick={e => this.props.onClick(e.target.name)}
          >
            =
          </Button>
          <br />
          <br />
        </div>
        <Separator orientation="vertical" />
        {/* ************************************************************************** */}
        <div id="numberButtons" style={kpColCss}>
          <Button
            id="Button-1"
            value="1"
            name="1"
            onClick={e => this.props.onClick(e.target.name)}
          >
            1
          </Button>
          <Button
            id="Button-2"
            value="2"
            name="2"
            onClick={e => this.props.onClick(e.target.name)}
          >
            2
          </Button>
          <Button
            id="Button-3"
            value="3"
            name="3"
            onClick={e => this.props.onClick(e.target.name)}
          >
            3
          </Button>
          <br />

          <Button
            id="Button-4"
            value="4"
            name="4"
            onClick={e => this.props.onClick(e.target.name)}
          >
            4
          </Button>
          <Button
            id="Button-5"
            value="5"
            name="5"
            onClick={e => this.props.onClick(e.target.name)}
          >
            5
          </Button>
          <Button
            id="Button-6"
            value="6"
            name="6"
            onClick={e => this.props.onClick(e.target.name)}
          >
            6
          </Button>
          <br />

          <Button
            id="Button-7"
            value="7"
            name="7"
            onClick={e => this.props.onClick(e.target.name)}
          >
            7
          </Button>
          <Button
            id="Button-8"
            value="8"
            name="8"
            onClick={e => this.props.onClick(e.target.name)}
          >
            8
          </Button>
          <Button
            id="Button-9"
            value="9"
            name="9"
            onClick={e => this.props.onClick(e.target.name)}
          >
            9
          </Button>
          <br />

          <Button
            id="Button-0"
            value="0"
            name="0"
            onClick={e => this.props.onClick(e.target.name)}
          >
            0
          </Button>
          <br />
        </div>
      </div>
    );
  }
}

const keyPadCSS = {
  display: "flex",
  "flex-direction": "row",
  // width: "25%",
  "text-align": "center",
  float: "center",
  margin: "auto",
 
};

const kpColCss = {
  display: "block",
  "border":"1px solid black"
};

export default KeyPadComponent;
