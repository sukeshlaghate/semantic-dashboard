import React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";
import { Card, Container, Menu, Button } from "semantic-ui-react";
import MenuLayout from "./components/menulayout";

const styles = {
  fontFamily: "Montserrat"
};

const App = () => (
  <div style={styles}>
    <Container>
      <MenuLayout />
    </Container>
    <Container style={{ marginTop: "7em" }}>
      <Dashboard />
    </Container>
  </div>
);

render(<App />, document.getElementById("root"));
