"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;
var React = require("react");
var renderer_1 = require("@react-pdf/renderer");
var Utils_1 = require("./Utils");
var TableCell = (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCell.prototype.render = function () {
        var _a, _b, _c;
        var content;
        if (typeof this.props.children === "string") {
            content = (React.createElement(renderer_1.Text, null, this.props.children));
        }
        else if (typeof this.props.children === "number") {
            content = (React.createElement(renderer_1.Text, null, this.props.children.toString()));
        }
        else {
            content = this.props.children;
        }
        var includeRightBorder = (0, Utils_1.getDefaultBorderIncludes)(this.props).includeRightBorder;
        var defaultStyle = {
            flex: (_a = this.props.weighting) !== null && _a !== void 0 ? _a : 1,
            justifyContent: "stretch",
            textAlign: (_b = this.props.textAlign) !== null && _b !== void 0 ? _b : "left",
            fontSize: (_c = this.props.fontSize) !== null && _c !== void 0 ? _c : (this.props.isHeader === true ? 14 : 12),
            borderRight: includeRightBorder === true ? "1pt solid black" : 0,
            wordWrap: "break-word",
            whiteSpace: "pre-wrap"
        };
        var mergedStyles = __spreadArray([
            defaultStyle
        ], (0, Utils_1.transformToArray)(this.props.style), true);
        return (React.createElement(renderer_1.View, { style: mergedStyles, wrap: true }, content));
    };
    return TableCell;
}(React.PureComponent));
exports.TableCell = TableCell;
//# sourceMappingURL=TableCell.js.map