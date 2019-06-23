import * as React from "react";
import { TableCellProps } from "./TableCell";
interface DataTableCellProps extends TableCellProps {
    data?: any;
    getContent: (data: any) => JSX.Element | string;
}
export declare class DataTableCell extends React.PureComponent<DataTableCellProps> {
    render(): JSX.Element;
}
export {};
