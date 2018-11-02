import * as React from "react";

export interface BoxProps {
  column?: boolean;
  grow?: boolean | number;
  shrink?: boolean | number;
  basis?: number | string;
  wrap?: boolean | "nowrap" | "wrap" | "wrap-reverse";
  style?: any;
}

export class Box extends React.PureComponent<BoxProps> {
  public render() {
    const grow =
      this.props.grow === true
        ? 1
        : this.props.grow === false
          ? undefined
          : this.props.grow || 0;
    const shrink =
      this.props.shrink === true
        ? 1
        : this.props.shrink === false
          ? undefined
          : this.props.shrink || 1;
    const flexBasis =
      this.props.basis === undefined ? "auto" : this.props.basis;
    const wrap =
      this.props.wrap === true ? "wrap" : this.props.wrap || "nowrap";
    return (
      <div
        style={{
          display: "flex",
          flexDirection: this.props.column ? "column" : "row",
          minHeight: this.props.column ? undefined : "1em",
          flexGrow: grow,
          flexShrink: shrink,
          flexBasis,
          margin: 1,
          padding: 1,
          borderRadius: 4,
          border: "1px solid rgba(0,0,0,0.15)",
          borderStyle: "dashed",
          flexWrap: wrap,
          ...this.props.style
        }}
      >
        {this.props.children || null}
      </div>
    );
  }
}
