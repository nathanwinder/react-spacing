import * as React from "react";
export default class Inline extends React.PureComponent {
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
//# sourceMappingURL=Inline.js.map