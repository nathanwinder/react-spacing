import * as React from "react";
export class Inset extends React.PureComponent {
    render() {
        const a = this.props.all;
        const v = this.props.vertical;
        const h = this.props.horizontal;
        const t = this.props.top || v || a || 0;
        const l = this.props.left || h || a || 0;
        const b = this.props.bottom || v || a || 0;
        const r = this.props.right || h || a || 0;
        const aa = this.props.allAdjustment;
        const va = this.props.verticalAdjustment;
        const ha = this.props.horizontalAdjustment;
        const ta = this.props.topAdjustment || va || aa || 0;
        const la = this.props.leftAdjustment || ha || aa || 0;
        const ba = this.props.bottomAdjustment || va || aa || 0;
        const ra = this.props.rightAdjustment || ha || aa || 0;
        const style = this.props.debug
            ? {
                borderStyle: "solid",
                borderTopWidth: t + ta,
                borderLeftWidth: l + la,
                borderBottomWidth: b + ba,
                borderRightWidth: r + ra,
                borderColor: "#FF000055"
            }
            : {
                paddingTop: t + ta,
                paddingLeft: l + la,
                paddingBottom: b + ba,
                paddingRight: r + ra
            };
        return (React.createElement("div", { style: Object.assign({ display: "flex", flexDirection: "column", flex: 1 }, style) }, this.props.children || null));
    }
}
Inset.sizeProps = [
    "all",
    "vertical",
    "horizontal",
    "top",
    "bottom",
    "left",
    "right"
];
Inset.adjustmentProps = [
    "allAdjustment",
    "verticalAdjustment",
    "horizontalAdjustment",
    "topAdjustment",
    "bottomAdjustment",
    "leftAdjustment",
    "rightAdjustment"
];
//# sourceMappingURL=Inset.js.map