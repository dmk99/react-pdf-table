import { TableRowProps } from "./TableRow";
import * as React from "react";
export interface TableBodyProps extends TableRowProps {
    data?: any[];
    zebra?: boolean;
    renderTopBorder?: boolean;
}
export declare class TableBody extends React.PureComponent<TableBodyProps> {
    render(): JSX.Element[];
}
