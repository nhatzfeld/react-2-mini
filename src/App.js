import React, { Component } from "react";

// Components
import EditToggle from "./components/EditToggle";
import ColorChanger from "./components/ColorChanger";
import SizeChanger from "./components/SizeChanger";
import FamilyChanger from "./components/FamilyChanger";
import TextContainer from "./components/TextContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: "black",
      fontSize: 12,
      fontFamily: "monospace",
      allowEdit: true
    };
    // What is binding this doing?
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateFamily.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle
            // these are props
            update={this.updateEditStatus}
            allowEdit={this.state.allowEdit}
          />
          <ColorChanger
            update={this.updateColorChanger}
            allowEdit={this.state.allowEdit}
          />
          <SizeChanger
            update={this.SizeChanger}
            allowEdit={this.state.allowEdit}
          />
          <FamilyChanger
            update={this.FamilyChanger}
            allowEdit={this.state.allowEdit}
          />
        </div>
        <div className="textArea">
          <TextContainer />
        </div>
      </div>
    );
  }
}

export default App;
