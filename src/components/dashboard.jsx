import React, { Component } from "react";
import { Menu, Card, Button, Transition } from "semantic-ui-react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFace: "front",
      visibility: true
    };
  }

  handleClick = (e, data) => {
    this.setState({
      visibility: false
    });
    setTimeout(
      function() {
        this.setState({ cardFace: "back", visibility: true });
      }.bind(this),
      50
    );
  };

  handleflipback = (e, data) => {
    this.setState({ visibility: false });
    setTimeout(
      function() {
        this.setState({ cardFace: "front", visibility: true });
      }.bind(this),
      50
    );
  };

  render() {
    const { cardFace, visibility, animate } = this.state;
    return (
      <div>
        <Card.Group>
          <Transition.Group animation={"horizontal flip"} duration={600}>
            {visibility && (
              <Card visible={cardFace == "front"}>
                <Card.Content>
                  <Card.Header>
                    {cardFace == "front" ? "Steve Sanders" : "Settings"}
                  </Card.Header>
                  <Card.Meta>
                    {cardFace == "front" ? "Friend of Elliot" : "Modify"}
                  </Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button
                      basic
                      color="green"
                      onClick={
                        cardFace == "front" ? (
                          this.handleClick
                        ) : (
                          this.handleflipback
                        )
                      }
                    >
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            )}
          </Transition.Group>

          <Card>
            <Card.Content>
              <Card.Header>Stevey Wonders</Card.Header>
              <Card.Meta>Friend of Elliot</Card.Meta>
              <Card.Description>
                Stevey wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        {this.props.children}
      </div>
    );
  }
}

// Dashboard.propTypes={

//   children: function (props, propName, componentName) {
//     const prop = props[propName]

//     let error = null
//     React.Children.forEach(prop, function (child) {

//       if (child.type !== Card.Group || child.type !== Card ) {
//         error = new Error('`' + componentName + '` children should be of type `Card` or `Card.Group`.');
//       }
//     });
//     return error;
//   }

// };

export default Dashboard;
