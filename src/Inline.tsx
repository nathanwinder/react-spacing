import * as React from "react";

export interface IInlineDebugOptions {
  color?: string;
  border?: boolean;
  borderColor?: string;
}

export interface IInlineProps {
  value: number;
  valueAdjustment?: number;
  debug?: boolean | IInlineDebugOptions;
}

export class Inline extends React.PureComponent<IInlineProps> {
  public static readonly sizeProps: Array<keyof IInlineProps> = ["value"];
  public static readonly adjustmentProps: Array<keyof IInlineProps> = [
    "valueAdjustment"
  ];

  public render() {
    let debug: any;
    const defaultDebugColor = "#00FF0055";
    const defaultBorderColor = "green";
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
          flexDirection: "column",
          flex: 1,
          minWidth: width,
          maxWidth: width,
          ...debug
        }}
      />
    );
  }
}
