import * as React from "react";
export interface IInlineDebugOptions {
    color?: string;
    border?: boolean;
    borderColor?: string;
}
export interface IInlineProps {
    value: number;
    valueAdjustment?: number;
    debug?: boolean | IInlineDebugOptions;
}
export declare class Inline extends React.PureComponent<IInlineProps> {
    static readonly sizeProps: Array<keyof IInlineProps>;
    static readonly adjustmentProps: Array<keyof IInlineProps>;
    render(): JSX.Element;
}
//# sourceMappingURL=Inline.d.ts.map