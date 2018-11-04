import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Inline, Inset, Stack, TextBlock } from "@winderful/react-spacing";
import * as React from "react";
import { Box } from "./Box";
import { robotoMetrics } from "./font";
import { Page } from "./Page";

const debug = (value: any = true) =>
  boolean("debug", !!value) ? value || true : false;
storiesOf("react-spacing/basics", module)
  .addDecorator(withKnobs)
  .add("Inline", () => (
    <Page direction="row">
      <Box grow />
      <Inline value={20} debug={debug()} />
      <Box grow />
    </Page>
  ))
  .add("Stack", () => (
    <Page>
      <Box grow />
      <Stack value={20} debug={debug()} />
      <Box grow />
    </Page>
  ))
  .add("Inset", () => (
    <Page>
      <Inset all={20} debug={debug()}>
        <Box grow />
      </Inset>
    </Page>
  ))

  .add("Inset, Inline, Stack Layout", () => (
    <Page>
      <Inset all={20} debug={debug()}>
        <Box column grow>
          <Box grow />
          <Box wrap>
            {[1, 2, 3, 4, 5].map(i => (
              <Box>
                <TextBlock size={10} metrics={robotoMetrics}>
                  Item {i}
                </TextBlock>
                <Inline value={5} debug={debug()} />
              </Box>
            ))}
          </Box>
        </Box>
        <Stack value={10} debug={debug()} />
        <Box>
          <Box grow basis={0}>
            <Inset horizontal={10} vertical={5} debug={debug()}>
              <Box>
                <TextBlock size={10} metrics={robotoMetrics}>
                  Cancel
                </TextBlock>
              </Box>
            </Inset>
          </Box>
          <Inline value={10} debug={debug()} />
          <Box grow basis={0}>
            <Inset horizontal={10} vertical={5} debug={debug()}>
              <Box shrink>
                <TextBlock size={10} metrics={robotoMetrics}>
                  Ok
                </TextBlock>
              </Box>
            </Inset>
          </Box>
        </Box>
      </Inset>
    </Page>
  ));
