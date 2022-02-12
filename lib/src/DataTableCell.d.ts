import * as React from "react";
import { TableCellProps } from "./TableCell";
export interface DataTableCellProps extends TableCellProps {
    data?: any;
    getContent: (data: any) => React.ReactNode | JSX.Element | string | number;
}
export declare class DataTableCell extends React.PureComponent<DataTableCellProps> {
    render(): JSX.Element;
}
