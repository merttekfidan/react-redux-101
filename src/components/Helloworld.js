import React, { Component } from "react";
import { store } from "../store";

export default class Helloworld extends Component {
  state = {
    text: this.props.tech,
  };

  render() {
    return (
      <div>
        <h1>{store.getState().tech}</h1>
      </div>
    );
  }
}
