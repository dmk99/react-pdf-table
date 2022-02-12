"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformToArray = exports.getDefaultBorderIncludes = void 0;
function getDefaultBorderIncludes(border) {
    var _a, _b, _c, _d;
    return {
        includeBottomBorder: (_a = border.includeBottomBorder) !== null && _a !== void 0 ? _a : true,
        includeTopBorder: (_b = border.includeTopBorder) !== null && _b !== void 0 ? _b : true,
        includeLeftBorder: (_c = border.includeLeftBorder) !== null && _c !== void 0 ? _c : true,
        includeRightBorder: (_d = border.includeRightBorder) !== null && _d !== void 0 ? _d : true,
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