import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

import "./menulayout.css";

import GeoBISearch from "./geobisearch";
import UserDetails from "./userdetails";

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

export default class MenuLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "inbox",
      sidebarExpanded: false,
      username: "John Doe"
    };
  }

  handleItemClick = (e, { name }) => {
    name != "sidebar"
      ? this.setState({ activeItem: name })
      : this.setState({ activeItem: "" });
  };

  render() {
    const { activeItem, username } = this.state;
    return (
      <div>
        <Menu borderless fixed="top" style={fixedMenuStyle}>
          <Container fluid>
            <Menu.Item as="a" header name="sidebar">
              <Button icon>
                <Icon name="bars" />
              </Button>
              <span className={"TitleStyle"}>rxGeoBI</span>
            </Menu.Item>

            <Menu.Item
              name="search"
              style={{ margin: "0.9em" }}
              position="right"
            >
              <GeoBISearch />
            </Menu.Item>

            <Menu.Item
              name="alerts"
              active={activeItem === "alerts"}
              onClick={this.handleItemClick}
              style={{ margin: "0.9em" }}
              position="right"
            >
              <Icon name="bell" size={"large"}>
                <Label
                  circular
                  color="teal"
                  size={"mini"}
                  attached={"top right"}
                >
                  1
                </Label>
              </Icon>
            </Menu.Item>

            <UserDetails username={username} />
          </Container>
        </Menu>
      </div>
    );
  }
}
