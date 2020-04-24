import React, { Component } from "react";
import "./App.css";
import Helloworld from "./components/Helloworld";
import ButtonGroup from "./components/ButtonGroup";
import { store } from "./store";
class App extends Component {
  render() {
    return [
      <Helloworld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />,
    ];
  }
}

export default App;
