import React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";
import { Card, Container, Menu, Button } from "semantic-ui-react";
import MenuLayout from "./components/menulayout";

const styles = {
  fontFamily: "Montserrat",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <MenuLayout />
    <Container style={{ marginTop: "7em" }}>
      <Dashboard>
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
      </Dashboard>
    </Container>
  </div>
);

render(<App />, document.getElementById("root"));
