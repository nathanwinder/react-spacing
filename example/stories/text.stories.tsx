import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Inset, TextBlock } from "@winderful/react-spacing";
import * as React from "react";
import { robotoMetrics } from "./font";

storiesOf("react-spacing/text", module)
  .addDecorator(withKnobs)
  .add("Text", () => (
    <Inset all={40} debug>
      <TextBlock size={40} lineHeight={1.25} metrics={robotoMetrics}>
        This text is exactly 40 characters high and the leading and trailing
        whitespace has been removed. This makes it easier to accurately layout a
        page.
      </TextBlock>
    </Inset>
  ));
