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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var React = require("react");
var Utils_1 = require("./Utils");
var TableRow_1 = require("./TableRow");
var TableHeader = (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeader.prototype.render = function () {
        var _this = this;
        var _a = (0, Utils_1.getDefaultBorderIncludes)(this.props), includeLeftBorder = _a.includeLeftBorder, includeBottomBorder = _a.includeBottomBorder, includeRightBorder = _a.includeRightBorder, includeTopBorder = _a.includeTopBorder;
        var rowCells = React.Children.toArray(this.props.children);
        return (React.createElement(TableRow_1.TableRow, __assign({}, this.props, { key: "header", includeLeftBorder: includeLeftBorder, includeBottomBorder: includeBottomBorder, includeRightBorder: includeRightBorder, includeTopBorder: includeTopBorder }), rowCells.map(function (rc, columnIndex) { return React.cloneElement(rc, {
            key: columnIndex,
            isHeader: true,
            fontSize: _this.props.fontSize,
            textAlign: _this.props.textAlign,
            includeLeftBorder: columnIndex === 0,
            includeRightBorder: columnIndex !== (rowCells.length - 1)
        }); })));
    };
    return TableHeader;
}(React.PureComponent));
exports.TableHeader = TableHeader;
//# sourceMappingURL=TableHeader.js.map