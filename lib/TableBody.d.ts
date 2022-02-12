import { TableRowProps } from "./TableRow";
import * as React from "react";
export interface TableBodyProps extends TableRowProps {
    data?: any[];
    zebra?: boolean;
}
interface InternalBodyProps extends TableBodyProps {
    renderTopBorder?: boolean;
}
export declare class TableBody extends React.PureComponent<InternalBodyProps> {
    render(): JSX.Element[];
}
export {};
