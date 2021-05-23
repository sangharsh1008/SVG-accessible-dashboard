import React from "react";

import { AccessibleSVG } from "./AccessibleSVG";
import { ReactComponent as Logo1 } from "./login_01a_figuresLeft.svg";

import { accessibleSVGAsImage } from "./accessibleSVGAsImage";

class App extends React.Component {
  render() {
    return (
      <div tabIndex="0">
        <AccessibleSVG
          component={<Logo1 aria-hidden />}
          title="this is an login image"
        />
        {accessibleSVGAsImage()}
      </div>
    );
  }
}

export default App;
