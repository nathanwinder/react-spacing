import * as React from "react";
/**
 * References
 *
 * https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align
 * https://silnrsi.github.io/FDBP/en-US/Design_Metrics.html
 */
export interface FontMetrics {
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
    weight?: number;
    color?: string;
    debug?: boolean;
    lineHeight?: number;
}
export declare class TextBlock extends React.PureComponent<TextBlockProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=TextBlock.d.ts.map