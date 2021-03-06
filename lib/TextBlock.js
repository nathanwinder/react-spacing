import * as platform from "platform";
import * as React from "react";
export class TextBlock extends React.PureComponent {
    render() {
        const metrics = this.props.metrics;
        let debug;
        if (this.props.debug) {
            debug = {};
            debug.border = "solid";
            debug.borderColor = "red";
            debug.borderWidth = 1;
        }
        const useHh = platform.manufacturer === "Apple";
        // choose the metric based on OS
        const ascent = useHh ? metrics.hHeadAscent : metrics.winAscent;
        const descent = useHh ? metrics.hHeadDescent : metrics.winDescent;
        // The ascent + descent is often larger than the em.
        // We get a scale used to adjust the size.
        const glyphScale = (ascent + descent) / metrics.em;
        // Adjust the fontSize so that a size of 20px
        // results in glyphs that are 20px tall.
        const pixels = this.props.size * glyphScale;
        // the total height
        const glyphHeight = pixels * glyphScale;
        // the additional pixels on either side of the content area
        const overflowPixels = glyphHeight - pixels;
        // the padding to add to the top to account for the ascent overflow
        const bottomAdjustment = overflowPixels * (descent / ascent);
        // the padding to add to the bottom to account for the descent overflow
        const topAdjustment = overflowPixels - bottomAdjustment;
        // the height of capital glyphs
        const capitalHeight = pixels * (metrics.capitalHeight / metrics.em);
        // the x glyph height
        const xHeight = pixels * (metrics.xHeight / metrics.em);
        const ascentHeight = pixels * (ascent / metrics.em);
        const capitalTop = ascentHeight - capitalHeight;
        const xTop = ascentHeight - xHeight;
        const fontSize = pixels;
        const lineHeight = this.props.lineHeight || 1;
        const lineHeightSpace = pixels * (lineHeight - 1);
        let backgroundImage;
        if (this.props.debug) {
            // TODO: This is not working will need to investigate
            const svg = `
      <svg with="10" height="${glyphHeight}">
        <line color="red" x="0" y1="0" y2="10" />
        <line color="red" x="${capitalTop}" y1="0" y2="10" />
        <line color="red" x="${xTop}" y1="0" y2="10" />
        <line color="red" x="${ascentHeight}" y1="0" y2="10" />
        <line color="red" x="${glyphHeight}" y1="0" y2="10" />
      </svg>
      `;
            backgroundImage = `url(data:image/svg+xml;utf8,${svg})`;
        }
        return (React.createElement("div", { style: {
                position: "relative",
                paddingTop: topAdjustment,
                paddingBottom: bottomAdjustment,
                marginTop: -capitalTop - lineHeightSpace / 2,
                marginBottom: ascentHeight - glyphHeight - lineHeightSpace / 2,
                backgroundImage,
                backgroundRepeat: "repeat"
            } },
            React.createElement("span", { style: {
                    display: "inline",
                    fontFamily: metrics.fontFamily,
                    fontWeight: this.props.weight,
                    color: this.props.color,
                    letterSpacing: this.props.letterSpacing,
                    fontSize,
                    lineHeight
                } }, this.props.children || null)));
    }
}
//# sourceMappingURL=TextBlock.js.map