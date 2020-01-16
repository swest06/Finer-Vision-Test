import React, { Component } from "react";
import Form from "./layout/Form";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="candidate">Sean West | Test Submission</h3>
        <Form />
      </div>
    );
  }
}
