import * as React from "react";

export interface PageProps {
  direction?: "row" | "column";
}

export class Page extends React.PureComponent<PageProps> {
  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: this.props.direction || "column",
          width: 300,
          minHeight: 200,
          flex: 1,
          margin: 1,
          padding: 1,
          borderRadius: 2,
          border: "1px solid rgba(0,0,0,0.15)",
          boxShadow: "0px 0px 2px 0px #00000022"
        }}
      >
        {this.props.children || null}
      </div>
    );
  }
}
