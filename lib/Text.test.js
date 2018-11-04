import { normalizeMetrics } from "./Text";
describe("normalizeMetrics", () => {
    it("Normalizes from baseline to top", () => {
        const metrics = {
            capHeight: -0.68,
            baseline: 0,
            xHeight: -0.45,
            descent: 0.21,
            bottom: 0.5,
            ascent: -0.695,
            tittle: -0.695,
            top: -0.765,
            fontFamily: "Roboto",
            fontWeight: "normal",
            fontSize: 200
        };
        const actual = normalizeMetrics(metrics);
        expect(actual).toEqual({
            capHeight: 0.085,
            baseline: 0.765,
            xHeight: 0.315,
            descent: 0.975,
            bottom: 1.265,
            ascent: 0.07,
            tittle: 0.07,
            top: 0,
            fontFamily: "Roboto",
            fontWeight: "normal",
            fontSize: 200
        });
    });
});
//# sourceMappingURL=Text.test.js.map