import React, { Component } from "react";
import { Avatar } from "antd";
class Main extends Component {
  render() {
    return (
      <div align="center">
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br />
        <Avatar
          shape="square"
          size={164}
          icon="user"
          style={{ background: "linear-gradient(to right, #de6262, #ffb88c)" }}
        />
        &nbsp;
        <Avatar
          shape="square"
          size={164}
          style={{ background: "linear-gradient(to right, #4b6cb7, #182848)" }}
          icon="user"
        />
        &nbsp;
        <Avatar
          shape="square"
          size={164}
          style={{ background: "linear-gradient(to right, #5f2c82, #49a09d)" }}
          icon="user"
        />
        &nbsp;
        <Avatar
          shape="square"
          size={164}
          style={{ background: "linear-gradient(to right, #DC2424, #4A569D)" }}
          icon="user"
        />
        &nbsp;
        <Avatar
          shape="square"
          size={164}
          style={{ background: "linear-gradient(to right, #4b6cb7, #182848)" }}
          icon="user"
        />
        &nbsp;
      </div>
    );
  }
}

export default Main;
