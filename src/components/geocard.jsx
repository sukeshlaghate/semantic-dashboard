import React, { Component } from "react";
import { Card, Image, Icon, Button, Transition } from "semantic-ui-react";

export default class GeoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFace: "front",
      visibility: true,
      animate: "horizontal flip"
    };
  }

  handleFlip = (e, data) => {
    this.setState({
      visibility: !this.state.visibility
    });
    setTimeout(
      function() {
        this.setState({ visibility: !this.state.visibility });
        this.handleOnComplete();
      }.bind(this),
      50
    );
  };

  handleOnComplete = (e, data) => {
    console.log("data " + data);
    this.setState({
      cardFace: this.state.cardFace === "front" ? "back" : "front"
    });
    console.log(this.state.cardFace);
  };

  render() {
    const { cardFace, visibility, animate } = this.state;
    return (
      <Transition.Group animation={animate} duration={600}>
        {visibility && (
          <Card>
            <Card.Content>
              <Card.Header>
                {cardFace == "front" ? "Steve Sanders" : "Settings"}
              </Card.Header>
              <Card.Meta>
                {cardFace == "front" ? "Friend of Elliot" : "Modify"}
              </Card.Meta>
              <Card.Description>
                Steve wants to add you to the group {cardFace} {"<br/>"}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green" onClick={this.handleFlip}>
                  Flip
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        )}
      </Transition.Group>
    );
  }
}
