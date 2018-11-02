import { storiesOf } from "@storybook/react";
import { Inline, Inset, Stack } from "@winderful/react-spacing";
import * as React from "react";
import { Box } from "./Box";
import { Page } from "./Page";

storiesOf("react-spacing/basic debugging", module)
  .add("Debug space", () => (
    <Page direction="row">
      <Inset all={20} debug={true}>
        <Box column grow>
          <Box grow>
            <Box grow />
            <Inline value={20} debug={true} />
            <Box grow />
          </Box>
          <Stack value={20} debug={true} />
          <Box grow />
        </Box>
      </Inset>
    </Page>
  ))

  .add("Set debug options", () => (
    <Page direction="row">
      <Inset all={20} debug={{ color: "red" }}>
        <Box column grow>
          <Box grow>
            <Box grow />
            <Inline value={20} debug={{ color: "teal", borderColor: "red" }} />
            <Box grow />
          </Box>
          <Stack value={20} debug={{ color: "yellow", border: true }} />
          <Box grow />
        </Box>
      </Inset>
    </Page>
  ));
