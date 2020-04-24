import React, { Component } from "react";
const state = { text: "asd" };
export default class Test extends Component {
  render() {
    return (
      <div>
        <h1>{console.log(state.text)}</h1>
      </div>
    );
  }
}
