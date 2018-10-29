import { withBreakpointProps } from "@winderful/react-breakpoints";
import { withDebugProps } from "@winderful/react-debugging";
import { withScaleProps } from "@winderful/react-scales";
import Inline from "./Inline";
import Inset from "./Inset";
import Stack from "./Stack";
export { Inline, Inset, Stack };
export function createSpaces(scaleContext, contextA, contextB) {
    const extend = (component, ...props) => {
        if (contextA && contextB) {
            return withDebugProps(withBreakpointProps(withScaleProps(component, scaleContext, ...props), contextA, ...props), contextB);
        }
        if (contextA && isDebugContext(contextA)) {
            return withDebugProps(withScaleProps(component, scaleContext, ...props), contextA);
        }
        return withScaleProps(component, scaleContext, ...props);
    };
    return {
        Inline: extend(Inline, "value"),
        Stack: extend(Stack, "value"),
        Inset: extend(Inset, "all", "vertical", "horizontal", "top", "left", "right", "bottom")
    };
}
function isDebugContext(x) {
    return x.enabled !== undefined;
}
//# sourceMappingURL=index.js.map