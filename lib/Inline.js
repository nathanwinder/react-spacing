import * as React from "react";
export class Inline extends React.PureComponent {
    render() {
        return (React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minWidth: this.props.value + (this.props.valueAdjustment || 0),
                maxWidth: this.props.value + (this.props.valueAdjustment || 0),
                backgroundColor: this.props.debug ? "#00FF0055" : undefined
            } }));
    }
}
Inline.sizeProps = ["value"];
Inline.adjustmentProps = [
    "valueAdjustment"
];
//# sourceMappingURL=Inline.js.map