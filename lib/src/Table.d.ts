import * as React from "react";
export interface ZebraProps {
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
}
export interface TableProps extends ZebraProps {
    data?: any[];
    isNested?: boolean;
}
export declare class Table extends React.PureComponent<TableProps> {
    render(): JSX.Element;
}
