"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
        else {
            content = this.props.children;
        }
        var includeRightBorder = Utils_1.getDefaultBorderIncludes(this.props).includeRightBorder;
        var defaultStyle = {
            flex: (_a = this.props.weighting, (_a !== null && _a !== void 0 ? _a : 1)),
            textAlign: (_b = this.props.textAlign, (_b !== null && _b !== void 0 ? _b : "left")),
            fontSize: (_c = this.props.fontSize, (_c !== null && _c !== void 0 ? _c : (this.props.isHeader === true ? 14 : 12))),
            borderRight: includeRightBorder && "1pt solid black",
        };
        var mergedStyles = [
            defaultStyle
        ];
        if (this.props.style !== undefined) {
            if (Array.isArray(this.props.style)) {
                mergedStyles.push.apply(mergedStyles, this.props.style);
            }
            else {
                mergedStyles.push(this.props.style);
            }
        }
        return (React.createElement(renderer_1.View, { style: mergedStyles, wrap: true }, content));
    };
    return TableCell;
}(React.PureComponent));
exports.TableCell = TableCell;
//# sourceMappingURL=TableCell.js.map