import React from "react";

const visuallyhiddenStyle = {
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  position: "absolute"
};
export class AccessibleSVG extends React.Component {
  render() {
    const { component, title } = this.props;

    return (
      <React.Fragment>
        <span style={visuallyhiddenStyle}>{title}</span>
        {component}
      </React.Fragment>
    );
  }
}
