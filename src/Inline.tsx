import * as React from "react";

export interface IInlineProps {
  value: number;
  valueAdjustment?: number;
  debug?: boolean;
}

export class Inline extends React.PureComponent<IInlineProps> {
  public static readonly sizeProps: Array<keyof IInlineProps> = ["value"];
  public static readonly adjustmentProps: Array<keyof IInlineProps> = [
    "valueAdjustment"
  ];

  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: this.props.value + (this.props.valueAdjustment || 0),
          maxWidth: this.props.value + (this.props.valueAdjustment || 0),
          backgroundColor: this.props.debug ? "#00FF0055" : undefined
        }}
      />
    );
  }
}
