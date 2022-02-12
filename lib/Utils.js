"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformToArray = exports.getDefaultBorderIncludes = void 0;
function getDefaultBorderIncludes(border) {
    return {
        includeBottomBorder: border.includeBottomBorder === undefined ? true : border.includeBottomBorder,
        includeTopBorder: border.includeTopBorder === undefined ? true : border.includeTopBorder,
        includeLeftBorder: border.includeLeftBorder === undefined ? true : border.includeLeftBorder,
        includeRightBorder: border.includeRightBorder === undefined ? true : border.includeRightBorder,
    };
}
exports.getDefaultBorderIncludes = getDefaultBorderIncludes;
function transformToArray(items) {
    if (items === undefined) {
        return [];
    }
    if (Array.isArray(items)) {
        return items;
    }
    return [items];
}
exports.transformToArray = transformToArray;
//# sourceMappingURL=Utils.js.map