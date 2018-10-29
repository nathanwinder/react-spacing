import {
  BreakpointContextValue,
  IWithBreakpointProps,
  IWithBreakpoints,
  withBreakpointProps
} from "@winderful/react-breakpoints";
import { Consumer, Context } from "react";

import {
  DebugContext,
  IWithDebug,
  withDebugProps
} from "@winderful/react-debugging";
import {
  IScale,
  IScaleContextValue,
  IWithScale,
  IWithScaleProps,
  withScaleProps
} from "@winderful/react-scales";
import Inline, { IInlineProps } from "./Inline";
import Inset, { IInsetProps } from "./Inset";
import Stack, { IStackProps } from "./Stack";

export { Inline, Inset, Stack };

export function createSpaces<T extends IScale, S extends keyof T>(
  scaleContext: Context<IScaleContextValue<T>>
): {
  Inline: IWithScale<IInlineProps, Extract<S, string>, "value">;
  Stack: IWithScale<IStackProps, Extract<S, string>, "value">;
  Inset: IWithScale<
    IInsetProps,
    Extract<S, string>,
    "all" | "vertical" | "horizontal" | "top" | "left" | "right" | "bottom"
  >;
};

export function createSpaces<
  B extends string,
  T extends IScale,
  S extends keyof T
>(
  scaleContext: Context<IScaleContextValue<T>>,
  breakpointContext: Consumer<BreakpointContextValue<B>>
): {
  Inline: IWithBreakpoints<
    IWithScaleProps<IInlineProps, Extract<S, string>, "value">,
    B,
    "value"
  >;
  Stack: IWithBreakpoints<
    IWithScaleProps<IStackProps, Extract<S, string>, "value">,
    B,
    "value"
  >;
  Inset: IWithBreakpoints<
    IWithScaleProps<
      IInsetProps,
      Extract<S, string>,
      "all" | "vertical" | "horizontal" | "top" | "left" | "right" | "bottom"
    >,
    B,
    "all" | "vertical" | "horizontal" | "top" | "left" | "right" | "bottom"
  >;
};

export function createSpaces<
  B extends string,
  T extends IScale,
  S extends keyof T
>(
  scaleContext: Context<IScaleContextValue<T>>,
  breakpointContext: Consumer<BreakpointContextValue<B>>,
  debugContext: DebugContext<any>
): {
  Inline: IWithDebug<
    IWithBreakpointProps<
      IWithScaleProps<IInlineProps, Extract<S, string>, "value">,
      B,
      "value"
    >
  >;
  Stack: IWithDebug<
    IWithBreakpointProps<
      IWithScaleProps<IStackProps, Extract<S, string>, "value">,
      B,
      "value"
    >
  >;
  Inset: IWithDebug<
    IWithBreakpointProps<
      IWithScaleProps<
        IInsetProps,
        Extract<S, string>,
        "all" | "vertical" | "horizontal" | "top" | "left" | "right" | "bottom"
      >,
      B,
      "all" | "vertical" | "horizontal" | "top" | "left" | "right" | "bottom"
    >
  >;
};

export function createSpaces<T extends IScale, S extends keyof T>(
  scaleContext: Context<IScaleContextValue<T>>,
  debugContext: DebugContext<any>
): {
  Inline: IWithDebug<
    IWithScaleProps<IInlineProps, Extract<S, string>, "value">
  >;
  Stack: IWithDebug<IWithScaleProps<IStackProps, Extract<S, string>, "value">>;
  Inset: IWithDebug<
    IWithScaleProps<
      IInsetProps,
      Extract<S, string>,
      "all" | "vertical" | "horizontal" | "top" | "left" | "right" | "bottom"
    >
  >;
};

export function createSpaces<B extends string, T extends IScale>(
  scaleContext: Context<IScaleContextValue<T>>,
  contextA?: DebugContext<any> | Consumer<BreakpointContextValue<B>>,
  contextB?: DebugContext<any>
) {
  const extend = <P, K extends keyof P>(
    component: React.ComponentType<P>,
    ...props: K[]
  ) => {
    if (contextA && contextB) {
      return withDebugProps(
        withBreakpointProps(
          withScaleProps(component, scaleContext, ...props),
          contextA as Consumer<BreakpointContextValue<B>>,
          ...props
        ),
        contextB
      );
    }

    if (contextA && isDebugContext(contextA)) {
      return withDebugProps(
        withScaleProps(component, scaleContext, ...props),
        contextA
      );
    }

    return withScaleProps(component, scaleContext, ...props);
  };

  return {
    Inline: extend(Inline, "value"),
    Stack: extend(Stack, "value"),
    Inset: extend(
      Inset,
      "all",
      "vertical",
      "horizontal",
      "top",
      "left",
      "right",
      "bottom"
    )
  };
}

function isDebugContext(x: any): x is DebugContext<any> {
  return x.enabled !== undefined;
}
