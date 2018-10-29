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
export declare class Inset extends React.PureComponent<IInsetProps> {
    static readonly sizeProps: Array<keyof IInsetProps>;
    static readonly adjustmentProps: Array<keyof IInsetProps>;
    render(): JSX.Element;
}
//# sourceMappingURL=Inset.d.ts.map