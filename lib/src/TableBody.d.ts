import { TableRowProps } from "./TableRow";
import * as React from "react";
export interface TableBodyProps extends TableRowProps {
    data?: any[];
}
export declare class TableBody extends React.PureComponent<TableBodyProps> {
    render(): JSX.Element[];
}
