import React, { Component } from "react";
// import { Button, Separator } from "reakit";
import {
  Button,
  Popup,
  Grid
  // Segment
} from "semantic-ui-react";
//rating for test

class KeyPadComponent extends Component {
  render() {
    return (
      <Grid id="keyPad" style={keyPadCSS}>
        <Grid.Row stackable="true" fluid="true" columns={2} stretched>
          <Grid.Column>
            {/* <Segment> */}
            <div id="numberButtons">
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
                className="number"
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
              {/* <br /> */}
            </div>
            {/* </Segment> */}
          </Grid.Column>
          {/* Inner Grid - in columnd */}
          <Grid.Column>
            {/* <Segment> */}
            <Grid>
              <Grid.Row stackable="true" fluid="true" columns={2}>
                <Grid.Column>
                  <div id="operationsButtons">
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
                      <Popup.Header>Parser</Popup.Header>
                      <Popup.Content>
                        Use operators alongside expressions inside
                        parentheticals
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
                      <Popup.Header>Parser</Popup.Header>
                      <Popup.Content>
                        Use operators alongside expressions inside
                        parentheticals
                      </Popup.Content>
                    </Popup>
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
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div id="advancedOperationButtons" style={operatorStyle}>
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
                    <Popup
                      trigger={
                        <Button
                          secondary
                          style={buttonStyle}
                          id="B_sqrt"
                          value="sqrt"
                          // {`sqrt(${this.props.result}`}
                          name="sqrt"
                          onClick={e => this.props.onClick(e.target.name)}
                        >
                          sqrt
                        </Button>
                      }
                    >
                      <Popup.Header>Parser</Popup.Header>
                      <Popup.Content>
                        Use parentheticals alongside single-number operations
                      </Popup.Content>
                    </Popup>
                    <br />
                    <Button
                      secondary
                      style={buttonStyle}
                      id="B_decimal"
                      value="."
                      name="."
                      onClick={e => this.props.onClick(e.target.name)}
                    >
                      .
                    </Button>
                    <Popup
                      trigger={
                        <Button
                          secondary
                          style={buttonStyle}
                          id="B_round"
                          value="round"
                          name="round"
                          onClick={e => this.props.onClick(e.target.name)}
                        >
                          round
                        </Button>
                      }
                    >
                      <Popup.Header>Parser</Popup.Header>
                      <Popup.Content>
                        Use parentheticals alongside single-number operations
                      </Popup.Content>
                    </Popup>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={operatorStyle}>
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
                {/* need to expand to further subcategories and implement additional axios calls */}
                <Button
                  inverted
                  color="orange"
                  style={buttonStyle}
                  id="B_trivia"
                  value="trivia"
                  name="trivia"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  trivia
                </Button>
              </Grid.Row>
            </Grid>
            {/* </Segment> */}
          </Grid.Column>
          {/* END INNER GRID in col*/}
        </Grid.Row>
      </Grid>
    );
  }
}

const keyPadCSS = {
  margin: "auto",
  border: "5px solid black"
};

const operatorStyle = {
  justifyContent: "flex-end",
  display: "block",
  float: "center",
  margin: "auto"
};

const buttonStyle = {
  margin: "5px",
  width: "70px"
};

export default KeyPadComponent;
