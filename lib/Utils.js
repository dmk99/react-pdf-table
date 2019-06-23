"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDefaultBorderIncludes(border) {
    return {
        includeBottomBorder: border.includeBottomBorder === undefined ? true : border.includeBottomBorder,
        includeTopBorder: border.includeTopBorder === undefined ? true : border.includeTopBorder,
        includeLeftBorder: border.includeLeftBorder === undefined ? true : border.includeLeftBorder,
        includeRightBorder: border.includeRightBorder === undefined ? true : border.includeRightBorder,
    };
}
exports.getDefaultBorderIncludes = getDefaultBorderIncludes;
//# sourceMappingURL=Utils.js.map