import * as React from "react";
export interface IStackDebugOptions {
    color?: string;
    border?: boolean;
    borderColor?: string;
}
export interface IStackProps {
    value: number;
    valueAdjustment?: number;
    debug?: boolean | IStackDebugOptions;
}
export declare class Stack extends React.PureComponent<IStackProps> {
    static readonly sizeProps: Array<keyof IStackProps>;
    static readonly adjustmentProps: Array<keyof IStackProps>;
    render(): JSX.Element;
}
//# sourceMappingURL=Stack.d.ts.map