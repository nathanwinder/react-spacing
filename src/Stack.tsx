import * as React from "react";

export interface IStackProps {
  value: number;
  valueAdjustment?: number;
  debug?: boolean;
}

export class Stack extends React.PureComponent<IStackProps> {
  public static readonly sizeProps: Array<keyof IStackProps> = ["value"];
  public static readonly adjustmentProps: Array<keyof IStackProps> = [
    "valueAdjustment"
  ];

  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: this.props.value + (this.props.valueAdjustment || 0),
          backgroundColor: this.props.debug ? "#0077FF55" : undefined
        }}
      />
    );
  }
}
