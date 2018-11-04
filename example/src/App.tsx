import * as spacing from "@winderful/react-spacing";
import * as React from "react";
import "typeface-nunito";
import "./App.css";

const nunitoMetrics: spacing.FontMetrics = {
  fontFamily: "Nunito",
  fontWeight: 400,

  em: 1000,
  capitalHeight: 705,
  xHeight: 487,

  winAscent: 1087,
  winDescent: 275,

  typoAscent: 1011,
  typoDescent: 353,
  typoLineGap: 0,

  hHeadAscent: 1011,
  hHeadDescent: 353,
  hHeadLineGap: 0
};

const Text = spacing.TextBlock;
const Inset = spacing.Inset;

class App extends React.Component {
  public render() {
    return (
      <Inset all={40} debug>
        <Text
          size={20}
          color="red"
          weight={600}
          lineHeight={1.5}
          metrics={nunitoMetrics}
        >
          Hello, my name is Nathan Winder and getting this text to flow was a
          lot of work. Took two whole days by my count. But it is well worth it.
          Really hoping this flows as expected.
        </Text>
      </Inset>
    );
  }
}

export default App;
