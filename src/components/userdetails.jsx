import React, { Component } from "react";

import { Menu, Dropdown, Image, Icon } from "semantic-ui-react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username };
  }

  handleProfile = (e, data) => {
    console.log(data);
  };

  handleSignOut = (e, data) => {
    //toDo handle signout
    console.log("Sign out");
  };

  render() {
    const { username } = this.state;
    return (
      <Menu.Item position="right">
        <Image src="/assets/images/square-image.png" avatar />
        <Dropdown pointing text={username} labeled button>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.handleProfile}>
              <Icon name="user" />Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={this.handleSignOut}>
              <Icon name="sign out" />Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    );
  }
}
