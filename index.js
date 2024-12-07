import config from "./src/config";
import lgre from "./src/lgre";
import fmt from "./src/fmt";

export { config };
export { lgre };
export { fmt };

/**
 * @function value is odd?
 * @param {number} val
 * @return {boolean}
 * @example
 * isOdd(3);
 */
export const isOdd = (val) => (val & 1) === 0;
