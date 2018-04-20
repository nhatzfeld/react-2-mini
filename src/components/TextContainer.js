import React, { Component } from "react";

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
    this.state.updateText = this.state.updateText.bind(this);
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="textContainer">
        <textarea
          style={{
            Font: this.fontFamily,
            Size: this.fontSize,
            Color: this.fontColor
          }}
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
