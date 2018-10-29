import * as React from "react";
export interface IInsetProps {
    all?: number;
    allAdjustment?: number;
    vertical?: number;
    verticalAdjustment?: number;
    horizontal?: number;
    horizontalAdjustment?: number;
    top?: number;
    topAdjustment?: number;
    left?: number;
    leftAdjustment?: number;
    right?: number;
    rightAdjustment?: number;
    bottom?: number;
    bottomAdjustment?: number;
    debug?: boolean;
}
export default class Inset extends React.PureComponent<IInsetProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=Inset.d.ts.map