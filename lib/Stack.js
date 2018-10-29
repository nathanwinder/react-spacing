import * as React from "react";
export default class Stack extends React.PureComponent {
    render() {
        return (React.createElement("div", { style: {
                display: "flex",
                flexDirection: "row",
                height: this.props.value + (this.props.valueAdjustment || 0),
                backgroundColor: this.props.debug ? "#0077FF55" : undefined
            } }));
    }
}
//# sourceMappingURL=Stack.js.map