import * as React from "react";
import ReactPDF from "@react-pdf/renderer";
export interface TableBorder {
    includeTopBorder?: boolean;
    includeRightBorder?: boolean;
    includeBottomBorder?: boolean;
    includeLeftBorder?: boolean;
}
export interface TableCellProps extends TableBorder {
    weighting?: number;
    style?: ReactPDF.Style | ReactPDF.Style[];
    textAlign?: "left" | "center" | "right";
    isHeader?: boolean;
    fontSize?: number | string;
}
export declare class TableCell extends React.PureComponent<TableCellProps> {
    render(): JSX.Element;
}
