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
var TableRow_1 = require("./TableRow");
var React = require("react");
var Utils_1 = require("./Utils");
var TableBody = (function (_super) {
    __extends(TableBody, _super);
    function TableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBody.prototype.render = function () {
        var _this = this;
        var _a;
        var rowCells = React.Children.toArray(this.props.children);
        var _b = Utils_1.getDefaultBorderIncludes(this.props), includeLeftBorder = _b.includeLeftBorder, includeBottomBorder = _b.includeBottomBorder, includeRightBorder = _b.includeRightBorder;
        var dataRows = (_a = this.props.data, (_a !== null && _a !== void 0 ? _a : []));
        return ((dataRows).map(function (data, rowIndex) { return (React.createElement(TableRow_1.TableRow, __assign({}, _this.props, { key: rowIndex, data: data, includeLeftBorder: includeLeftBorder, includeBottomBorder: includeBottomBorder, includeRightBorder: includeRightBorder, includeTopBorder: false }), rowCells)); }));
    };
    return TableBody;
}(React.PureComponent));
exports.TableBody = TableBody;
//# sourceMappingURL=TableBody.js.map