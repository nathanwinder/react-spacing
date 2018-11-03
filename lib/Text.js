import * as React from "react";
export class Text extends React.PureComponent {
    render() {
        const props = this.props;
        const metrics = this.props.metrics;
        const relativeHeight = metrics.bottom - metrics.top;
        const relativeCapitalHeight = relativeHeight + metrics.ascent + metrics.descent;
        // const marginTop = relativeDistanceToTop * -fontSize;
        // const marginBottom = relativeDistanceToBottom * -fontSize;
        let debug;
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
        return (React.createElement("div", { style: Object.assign({}, debug) },
            React.createElement("span", { style: {
                    display: "inline-block",
                    marginTop,
                    marginBottom
                } },
                React.createElement("span", { style: {
                        display: "inline-block",
                        fontFamily: metrics.fontFamily,
                        fontWeight: metrics.fontWeight,
                        fontSize,
                        lineHeight
                    } }, props.children || null))));
    }
}
//# sourceMappingURL=Text.js.map