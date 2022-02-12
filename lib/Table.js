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
        var _a, _b, _c, _d, _e, _f, _g, _h;
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
        tableBody = React.cloneElement(tableBody, {
            data: (_b = (_a = tableBody.props.data) !== null && _a !== void 0 ? _a : this.props.data) !== null && _b !== void 0 ? _b : [],
            renderTopBorder: !tableHeader,
            zebra: (_d = (_c = tableBody.props.zebra) !== null && _c !== void 0 ? _c : this.props.zebra) !== null && _d !== void 0 ? _d : false,
            evenRowColor: (_f = (_e = tableBody.props.evenRowColor) !== null && _e !== void 0 ? _e : this.props.evenRowColor) !== null && _f !== void 0 ? _f : '',
            oddRowColor: (_h = (_g = tableBody.props.oddRowColor) !== null && _g !== void 0 ? _g : this.props.oddRowColor) !== null && _h !== void 0 ? _h : '',
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