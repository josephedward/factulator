import React, { Component } from "react";
// import { Button, Separator } from "reakit";
import { Button, Popup } from "semantic-ui-react";
//rating for test

class KeyPadComponent extends Component {
  render() {
    return (
      <div id="keyPad" style={keyPadCSS}>
        <div id="numberButtons" style={kpColCss}>
          <Button
            primary
            style={buttonStyle}
            id="B_1"
            value="1"
            name="1"
            onClick={e => this.props.onClick(e.target.name)}
          >
            1
          </Button>
          <Button
            primary
            style={buttonStyle}
            id="B_2"
            value="2"
            name="2"
            onClick={e => this.props.onClick(e.target.name)}
          >
            2
          </Button>
          <Button
            primary
            style={buttonStyle}
            id="B_3"
            value="3"
            name="3"
            onClick={e => this.props.onClick(e.target.name)}
          >
            3
          </Button>
          <br />

          <Button
            primary
            style={buttonStyle}
            id="B_4"
            value="4"
            name="4"
            onClick={e => this.props.onClick(e.target.name)}
          >
            4
          </Button>
          <Button
            primary
            style={buttonStyle}
            id="B_5"
            value="5"
            name="5"
            onClick={e => this.props.onClick(e.target.name)}
          >
            5
          </Button>
          <Button
            primary
            style={buttonStyle}
            id="B_6"
            value="6"
            name="6"
            onClick={e => this.props.onClick(e.target.name)}
          >
            6
          </Button>
          <br />

          <Button
            primary
            style={buttonStyle}
            id="B_7"
            value="7"
            name="7"
            onClick={e => this.props.onClick(e.target.name)}
          >
            7
          </Button>
          <Button
            primary
            style={buttonStyle}
            id="B_8"
            value="8"
            name="8"
            onClick={e => this.props.onClick(e.target.name)}
          >
            8
          </Button>
          <Button
            primary
            style={buttonStyle}
            id="B_9"
            value="9"
            name="9"
            onClick={e => this.props.onClick(e.target.name)}
          >
            9
          </Button>
          <br />

          <Button
            primary
            style={buttonStyle}
            id="B_0"
            value="0"
            name="0"
            onClick={e => this.props.onClick(e.target.name)}
          >
            0
          </Button>
          <br />
        </div>

        <div id="operationsButtons" style={kpColCss}>
          <Popup
            trigger={
              <Button
                secondary
                style={buttonStyle}
                id="B_leftParenthetical"
                value="left parentheses"
                name="("
                onClick={e => this.props.onClick(e.target.name)}
              >
                (
              </Button>
            }
          >
            <Popup.Header>Parser PEMDAS</Popup.Header>
            <Popup.Content>
              Use operators alongside expressions inside parentheticals
            </Popup.Content>
          </Popup>
          <Popup
            trigger={
              <Button
                secondary
                style={buttonStyle}
                id="B_rightParenthetical"
                value="right parentheses"
                name=")"
                onClick={e => this.props.onClick(e.target.name)}
              >
                )
              </Button>
            }
          >
            <Popup.Header>Parser PEMDAS</Popup.Header>
            <Popup.Content>
              Use operators alongside expressions inside parentheticals
            </Popup.Content>
          </Popup>

          <Button
            secondary
            style={buttonStyle}
            id="B_power"
            value="power"
            name="^"
            onClick={e => this.props.onClick(e.target.name)}
          >
            ^
          </Button>

          <br />

          <Button
            secondary
            style={buttonStyle}
            id="B_plus"
            value="plus"
            name="+"
            onClick={e => this.props.onClick(e.target.name)}
          >
            +
          </Button>
          <Button
            secondary
            style={buttonStyle}
            id="B_minus"
            value="minus"
            name="-"
            onClick={e => this.props.onClick(e.target.name)}
          >
            -
          </Button>
          <br />
          <Button
            secondary
            style={buttonStyle}
            id="B_multiply"
            value="times"
            name="*"
            onClick={e => this.props.onClick(e.target.name)}
          >
            x
          </Button>

          <Button
            secondary
            style={buttonStyle}
            id="B_divide"
            value="divide"
            name="/"
            onClick={e => this.props.onClick(e.target.name)}
          >
            /
          </Button>

          <Button
            secondary
            style={buttonStyle}
            name="."
            onClick={e => this.props.onClick(e.target.name)}
          >
            .
          </Button>

          <br />
          <Button
            secondary
            style={buttonStyle}
            id="B_delete"
            value="delete"
            name="delete"
            onClick={e => this.props.onClick(e.target.name)}
          >
            Del
          </Button>
          <Button
            secondary
            style={buttonStyle}
            id="B_clear"
            value="clear"
            name="C"
            onClick={e => this.props.onClick(e.target.name)}
          >
            C
          </Button>
          <Button
            secondary
            style={buttonStyle}
            id="B_equal"
            value="equals"
            name="="
            onClick={e => this.props.onClick(e.target.name)}
          >
            =
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
  float: "center",
  margin: "auto"
};

const kpColCss = {
  display: "block",
  border: "1px solid black",
  float: "center",
  margin: "auto"
};

const buttonStyle = {
  margin: "5px"
};

export default KeyPadComponent;
