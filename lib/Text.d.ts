import * as React from "react";
export interface FontMetrics {
    capHeight: number;
    baseline: number;
    xHeight: number;
    descent: number;
    bottom: number;
    ascent: number;
    tittle: number;
    top: number;
    fontFamily: string;
    fontWeight: "bold" | "normal" | number;
    fontSize: number;
}
export interface TextProps {
    metrics: FontMetrics;
    size: number;
    debug?: boolean;
}
export declare class Text extends React.PureComponent<TextProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=Text.d.ts.map