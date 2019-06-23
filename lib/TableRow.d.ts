import * as React from "react";
import { TableBorder } from "./TableCell";
import { TableBodyProps } from "./TableBody";
export interface TableRowProps extends TableBorder {
    fontSize?: number | string;
    textAlign?: "left" | "center" | "right";
    data?: any;
}
export declare class TableRow extends React.PureComponent<Partial<TableBodyProps>> {
    render(): JSX.Element;
}
