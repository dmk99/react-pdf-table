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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var React = require("react");
var TableHeader_1 = require("./TableHeader");
var TableBody_1 = require("./TableBody");
var renderer_1 = require("@react-pdf/renderer");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var tableHeader = null;
        var tableBody = null;
        React.Children.forEach(this.props.children, function (c) {
            if ((c === null || c === void 0 ? void 0 : c.type) === TableHeader_1.TableHeader) {
                tableHeader = c;
            }
            else if ((c === null || c === void 0 ? void 0 : c.type) === TableBody_1.TableBody) {
                tableBody = c;
            }
        });
        if (tableBody === null) {
            tableBody = React.createElement(TableBody_1.TableBody);
        }
        tableBody = React.cloneElement(tableBody, {
            data: (_c = (_b = (_a = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : this.props.data) !== null && _c !== void 0 ? _c : [],
            renderTopBorder: this.props.isNested ? false : !tableHeader,
            zebra: (_f = (_e = (_d = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _d === void 0 ? void 0 : _d.zebra) !== null && _e !== void 0 ? _e : this.props.zebra) !== null && _f !== void 0 ? _f : false,
            evenRowColor: (_j = (_h = (_g = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _g === void 0 ? void 0 : _g.evenRowColor) !== null && _h !== void 0 ? _h : this.props.evenRowColor) !== null && _j !== void 0 ? _j : '',
            oddRowColor: (_m = (_l = (_k = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _k === void 0 ? void 0 : _k.oddRowColor) !== null && _l !== void 0 ? _l : this.props.oddRowColor) !== null && _m !== void 0 ? _m : '',
        });
        return (React.createElement(renderer_1.View, { style: {
                width: "100%",
            } },
            tableHeader,
            tableBody));
    };
    return Table;
}(React.PureComponent));
exports.Table = Table;
//# sourceMappingURL=Table.js.map