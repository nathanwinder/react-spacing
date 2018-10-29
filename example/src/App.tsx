import {
  createBreakpointContext,
  withBreakpointProps
} from "@winderful/react-breakpoints";
import { createDebugContext, withDebugProps } from "@winderful/react-debugging";
import { createScaleContext, withScaleProps } from "@winderful/react-scales";
import * as spacing from "@winderful/react-spacing";
import * as React from "react";
import "./App.css";

const ScaleContext = createScaleContext({ xs: 5, s: 10, m: 20, l: 40, xl: 80 });
const BreakpointContext = createBreakpointContext(
  window,
  () => (window.innerWidth < 768 ? "mob" : "tab")
);
const DebugContext = createDebugContext(true);

const Inset = withDebugProps(
  withBreakpointProps(
    withScaleProps(spacing.Inset, ScaleContext, ...spacing.Inset.sizeProps),
    BreakpointContext.Consumer,
    ...spacing.Inset.sizeProps
  ),
  DebugContext
);
const Inline = withDebugProps(
  withBreakpointProps(
    withScaleProps(spacing.Inline, ScaleContext, ...spacing.Inline.sizeProps),
    BreakpointContext.Consumer,
    ...spacing.Inline.sizeProps
  ),
  DebugContext
);
const Stack = withDebugProps(
  withBreakpointProps(
    withScaleProps(spacing.Stack, ScaleContext, ...spacing.Stack.sizeProps),
    BreakpointContext.Consumer,
    ...spacing.Stack.sizeProps
  ),
  DebugContext
);

const Box = (props: {
  direction?: "row" | "column";
  wrap?: boolean;
  children?: any;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: props.direction || "row",
      flexWrap: props.wrap ? "wrap" : "nowrap"
    }}
  >
    {props.children}
  </div>
);

const Tag = (props: { children: any }) => (
  <span style={{ backgroundColor: "#def", color: "#0366d6", borderRadius: 4 }}>
    <Inset all="s">
      <span className="tag">{props.children}</span>
    </Inset>
  </span>
);

class App extends React.Component {
  public render() {
    return (
      <BreakpointContext.Provider>
        <div className="App">
          <Inset
            horizontal={{ mob: "m", tab: "xl" }}
            vertical={{ mob: "l", tab: "l" }}
            debug={false}
            debugOptions={{ debugChildren: false }}
          >
            <Box direction="column">
              <Box>
                <h1>@winderful/react-spacing</h1>
              </Box>
              <Stack value="m" />
              <Box wrap={true}>
                <Box direction="column">
                  <Box>
                    <Tag>react</Tag>
                    <Inline value="s" />
                  </Box>
                  <Stack value="xs" />
                </Box>
                <Box direction="column">
                  <Box>
                    <Tag>react-native</Tag>
                    <Inline value="s" />
                  </Box>
                  <Stack value="xs" />
                </Box>
                <Box direction="column">
                  <Box>
                    <Tag>higher-order-component</Tag>
                    <Inline value="s" />
                  </Box>
                  <Stack value="xs" />
                </Box>
                <Box direction="column">
                  <Tag>spacing</Tag>
                  <Stack value="xs" />
                </Box>
              </Box>
            </Box>
            <Box direction="column">
              <Stack value="s" />
              <p>
                React-spacing was inspired by Nathan Curtis' blog post "
                <a href="https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62">
                  Space in Design Systems
                </a>
                ". Nathan covers three primary elements of whitespace: inset,
                stack, and inline. He goes on to suggest developers should size
                whitespace useing a harmonious scale of t-shirt sizes. This
                enables developers to quickly layout an application without
                constantly asking the question "What size should this margin
                be?"
              </p>
              <Stack value="m" />
              <p>
                This idea has been adapted to this React/React-Native TypeScript
                library and has been enhanced to support breakpoints, debugging,
                and HOCs to add scaling to any component. This project utilizes
                @winderful/react-breakpoints, @winderful/react-scales, and
                @winderful/react-debugging.
              </p>
            </Box>
          </Inset>
        </div>
      </BreakpointContext.Provider>
    );
  }
}

export default App;
