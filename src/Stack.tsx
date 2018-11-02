import * as React from "react";

export interface IStackDebugOptions {
  color?: string;
  border?: boolean;
  borderColor?: string;
}

export interface IStackProps {
  value: number;
  valueAdjustment?: number;
  debug?: boolean | IStackDebugOptions;
}

export class Stack extends React.PureComponent<IStackProps> {
  public static readonly sizeProps: Array<keyof IStackProps> = ["value"];
  public static readonly adjustmentProps: Array<keyof IStackProps> = [
    "valueAdjustment"
  ];

  public render() {
    let debug: any;
    const defaultDebugColor = "#0077FF55";
    const defaultBorderColor = "blue";
    let width = this.props.value + (this.props.valueAdjustment || 0);
    if (this.props.debug) {
      debug = {};
      if (typeof this.props.debug === "object") {
        debug.backgroundColor = this.props.debug.color || defaultDebugColor;
        if (this.props.debug.border === true || this.props.debug.borderColor) {
          debug.borderWidth = 1;
          if (width > 1) {
            width -= 2;
          }
          debug.borderStyle = "solid";
          debug.borderColor =
            this.props.debug.borderColor || defaultBorderColor;
        }
      } else {
        debug.backgroundColor = defaultDebugColor;
      }
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: this.props.value + (this.props.valueAdjustment || 0),
          ...debug
        }}
      />
    );
  }
}
