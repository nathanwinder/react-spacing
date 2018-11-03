import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { FontMetrics, Text } from "@winderful/react-spacing";
import * as React from "react";

const metrics: FontMetrics = {
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

storiesOf("react-spacing/text", module)
  .addDecorator(withKnobs)
  .add("Text", () => (
    <span>
      <div
        style={{
          display: "inline-block",
          height: 200,
          width: 100,
          backgroundColor: "red"
        }}
      />
      <Text size={200} metrics={metrics} debug>
        Text
      </Text>
    </span>
  ));
