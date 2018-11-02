import * as React from "react";
export class Stack extends React.PureComponent {
    render() {
        let debug;
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
            }
            else {
                debug.backgroundColor = defaultDebugColor;
            }
        }
        return (React.createElement("div", { style: Object.assign({ display: "flex", flexDirection: "row", height: this.props.value + (this.props.valueAdjustment || 0) }, debug) }));
    }
}
Stack.sizeProps = ["value"];
Stack.adjustmentProps = [
    "valueAdjustment"
];
//# sourceMappingURL=Stack.js.map