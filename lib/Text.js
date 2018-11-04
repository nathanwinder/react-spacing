import * as React from "react";
const nunitoMetrics = {
    fontFamily: "Nunito",
    fontWeight: 400,
    em: 1000,
    capitalHeight: 705,
    xHeight: 487,
    winAscent: 1087,
    winDescent: 275,
    typoAscent: 1011,
    typoDescent: 353,
    typoLineGap: 0,
    hHeadAscent: 1011,
    hHeadDescent: 353,
    hHeadLineGap: 0
};
const DebugLine = (props) => (React.createElement("div", { style: {
        position: "absolute",
        borderBottom: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "red",
        top: props.position,
        height: 0,
        width: "100%"
    } }));
export class Text extends React.PureComponent {
    render() {
        const props = this.props;
        const metrics = nunitoMetrics;
        let debug;
        if (this.props.debug) {
            debug = {};
            debug.border = "solid";
            debug.borderColor = "red";
            debug.borderWidth = 1;
        }
        const ascent = metrics.winAscent;
        const descent = metrics.winDescent;
        const glyphScale = (ascent + descent) / metrics.em;
        const pixels = this.props.size * glyphScale;
        const glyphHeight = pixels * glyphScale;
        const overflowPixels = glyphHeight - pixels;
        const bottomAdjustment = overflowPixels * (descent / ascent);
        const topAdjustment = overflowPixels - bottomAdjustment;
        const capitalHeight = pixels * (metrics.capitalHeight / metrics.em);
        const xHeight = pixels * (metrics.xHeight / metrics.em);
        const ascentHeight = pixels * (ascent / metrics.em);
        const descentHeight = pixels * (descent / metrics.em);
        const capitalTop = ascentHeight - capitalHeight;
        const xTop = ascentHeight - xHeight;
        const fontSize = pixels;
        const lineHeight = this.props.lineHeight || 1;
        const lineHeightSpace = pixels * (lineHeight - 1);
        const svg = `
    <svg with="10" height="${glyphHeight}">
      <line color="red" x="0" y1="0" y2="10" />
      <line color="red" x="${capitalTop}" y1="0" y2="10" />
      <line color="red" x="${xTop}" y1="0" y2="10" />
      <line color="red" x="${ascentHeight}" y1="0" y2="10" />
      <line color="red" x="${glyphHeight}" y1="0" y2="10" />
    </svg>
    `;
        return (React.createElement("div", { style: {
                "position": "relative",
                "paddingTop": topAdjustment,
                "paddingBottom": bottomAdjustment,
                "marginTop": -capitalTop - lineHeightSpace / 2,
                "marginBottom": ascentHeight - glyphHeight - lineHeightSpace / 2,
                "background-image": `url(data:image/svg+xml;utf8,${svg})`,
                "backgroundRepeat": "repeat"
            } },
            React.createElement("span", { style: {
                    display: "inline",
                    fontFamily: metrics.fontFamily,
                    fontWeight: metrics.fontWeight,
                    fontSize,
                    lineHeight
                } }, this.props.children || null),
            this.props.debug && (React.createElement("svg", { width: "10", height: "37.100880000000004" },
                React.createElement("line", { color: "red", x: "0", y1: "0", y2: "10" }),
                React.createElement("line", { color: "red", x: "10.40568", y1: "0", y2: "10" }),
                React.createElement("line", { color: "red", x: "16.344", y1: "0", y2: "10" }),
                React.createElement("line", { color: "red", x: "29.60988", y1: "0", y2: "10" }),
                React.createElement("line", { color: "red", x: "37.100880000000004", y1: "0", y2: "10" }))
            // <React.Fragment>
            //   <DebugLine position={0} />
            //   <DebugLine position={capitalTop} />
            //   <DebugLine position={xTop} />
            //   <DebugLine position={ascentHeight} />
            //   <DebugLine position={glyphHeight} />
            // </React.Fragment>
            )));
    }
}
//# sourceMappingURL=Text.js.map