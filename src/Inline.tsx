import * as React from "react";

export interface IInlineProps {
  value: number;
  valueAdjustment?: number;
  debug?: boolean;
}

export default class Inline extends React.PureComponent<IInlineProps> {
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
