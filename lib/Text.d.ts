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
export interface TypeMetrics {
    fontFamily: string;
    fontWeight: number;
    em: number;
    winAscent: number;
    winDescent: number;
    typoAscent: number;
    typoDescent: number;
    typoLineGap: number;
    hHeadAscent: number;
    hHeadDescent: number;
    hHeadLineGap: number;
    capitalHeight: number;
    xHeight: number;
}
export interface TextBlockProps {
    metrics: FontMetrics;
    size: number;
    debug?: boolean;
    lineHeight?: number;
}
export declare class Text extends React.PureComponent<TextBlockProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=Text.d.ts.map