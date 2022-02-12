import * as React from "react";
import { TableBorder } from "./TableCell";
import { TableBodyProps } from "./TableBody";
export interface TableRowProps extends TableBorder {
    fontSize?: number | string;
    textAlign?: "left" | "center" | "right";
    data?: any;
    zebra?: boolean;
    even?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
}
export declare class TableRow extends React.PureComponent<Partial<TableBodyProps>> {
    render(): JSX.Element;
}
