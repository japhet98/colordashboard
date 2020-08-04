import React, { Component } from "react";
import Button from "./Button";

class TabList extends Component {
  render() {
    return (
      <div className="container tab-items">
        <Button className="tab-item" />
        <Button className="tab-item" />
        <Button className="tab-item" />
        <Button className="tab-item" />
      </div>
    );
  }
}

export default TabList;
