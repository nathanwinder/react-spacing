import * as spacing from "@winderful/react-spacing";
import * as React from "react";
import "./App.css";

const metrics: spacing.FontMetrics = {
  capHeight: -0.68,
  baseline: 0,
  xHeight: -0.45,
  descent: 0.21,
  bottom: 0.5,
  ascent: -0.695,
  tittle: -0.695,
  top: -0.765,
  fontFamily: "Roboto",
  fontWeight: "normal",
  fontSize: 200
};

const Text = spacing.Text;

class App extends React.Component {
  public render() {
    return (
      <span>
        <Text size={32} metrics={metrics} debug>
          TjIipS
        </Text>
      </span>
    );
  }
}

export default App;
