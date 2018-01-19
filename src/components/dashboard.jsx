import React, { Component } from "react";
import { Menu, Card, Button } from "semantic-ui-react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friend of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
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
