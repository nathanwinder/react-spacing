import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  FontMetrics,
  Inline,
  Inset,
  Stack,
  Text
} from "@winderful/react-spacing";
import * as React from "react";
import { Box } from "./Box";
import { Page } from "./Page";

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
                <Text size={100} metrics={metrics}>
                  Item {i}
                </Text>
                <span style={{ fontFamily: "Roboto", fontSize: 100 }} />{" "}
                <Inline value={5} debug={debug()} />
              </Box>
            ))}
          </Box>
        </Box>
        <Stack value={10} debug={debug()} />
        <Box>
          <Box grow basis={0}>
            <Inset horizontal={10} vertical={5} debug={debug()}>
              <Box>Cancel</Box>
            </Inset>
          </Box>
          <Inline value={10} debug={debug()} />
          <Box grow basis={0}>
            <Inset horizontal={10} vertical={5} debug={debug()}>
              <Box shrink>Ok</Box>
            </Inset>
          </Box>
        </Box>
      </Inset>
    </Page>
  ));
