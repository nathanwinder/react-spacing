import { storiesOf } from "@storybook/react";
import { createDebugContext, withDebugProps } from "@winderful/react-debugging";
import * as spacing from "@winderful/react-spacing";
import * as React from "react";
import { Box } from "./Box";
import { Page } from "./Page";

function usingWinderfulDebugging() {
  interface DebugOptions {
    inline: spacing.IInlineDebugOptions;
    inset: spacing.IInsetDebugOptions;
    stack: spacing.IStackDebugOptions;
  }
  const debugContext = createDebugContext<DebugOptions>(false);
  return {
    DebugContext: debugContext,
    Inline: withDebugProps(spacing.Inline, debugContext, "inline"),
    Inset: withDebugProps(spacing.Inset, debugContext, "inset"),
    Stack: withDebugProps(spacing.Stack, debugContext, "stack")
  };
}

storiesOf(`react-spacing/advanced debugging`, module).add(
  "Activate debugging scope from component",
  () => {
    // see implementation above for details on importing
    // @winderful/react-debugging
    const { Inset, Stack, Inline } = usingWinderfulDebugging();

    // not necessary to set debug attributes on the components
    return (
      <Page direction="row">
        <Inset all={20} debug={true} debugScope={true}>
          <Box column grow>
            <Box grow>
              <Box grow />
              <Inline value={20} />
              <Box grow />
            </Box>
            <Stack value={20} />
            <Box grow />
          </Box>
        </Inset>
      </Page>
    );
  }
);
