import * as React from "react";

export interface FontMetrics {
  capHeight: number;
  baseline: number;
  xHeight: number;
  descent: number;
  bottom: number;
  ascent: number;
  tittle: number;
  top: number;
  fontFamily: string;
  fontWeight: "bold" | "normal" | number;
  fontSize: number;
}

export interface TextProps {
  metrics: FontMetrics;
  size: number;
  debug?: boolean;
}

export class Text extends React.PureComponent<TextProps> {
  public render() {
    const props = this.props;
    const metrics = this.props.metrics;
    const relativeHeight = metrics.bottom - metrics.top;
    const relativeCapitalHeight =
      relativeHeight + metrics.ascent + metrics.descent;

    // const marginTop = relativeDistanceToTop * -fontSize;
    // const marginBottom = relativeDistanceToBottom * -fontSize;

    let debug: any;
    if (this.props.debug) {
      debug = {};
      debug.border = "solid";
      debug.borderColor = "red";
      debug.borderWidth = 1;
    }
    const fontSize = this.props.size;

    const marginTop = (metrics.top - metrics.capHeight) * this.props.size;
    const marginBottom = (metrics.baseline - metrics.bottom) * this.props.size;

    const lineHeight = 1;

    return (
      <div
        style={{
          ...debug
        }}
      >
        <span
          style={{
            display: "inline-block",
            marginTop,
            marginBottom
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: metrics.fontFamily,
              fontWeight: metrics.fontWeight,
              fontSize,
              lineHeight
            }}
          >
            {props.children || null}
          </span>
        </span>
      </div>
    );
  }
}
