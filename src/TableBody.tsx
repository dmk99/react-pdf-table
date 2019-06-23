import {TableRow, TableRowProps} from "./TableRow";
import * as React from "react";
import {getDefaultBorderIncludes} from "./Utils";

export interface TableBodyProps extends TableRowProps {
    /**
     * The data associated with the table.
     */
    data?: any[];
}

/**
 * This component displays the data as {@see TableRow}s.
 */
export class TableBody extends React.PureComponent<TableBodyProps> {
    render() {
        const rowCells: any[] = React.Children.toArray(this.props.children);
        const {includeLeftBorder, includeBottomBorder, includeRightBorder} = getDefaultBorderIncludes(this.props);
        const dataRows = this.props.data || [];

        return (
            (dataRows).map((data, rowIndex) => (
                <TableRow
                    {...this.props}
                    key={rowIndex}
                    data={data}
                    includeLeftBorder={includeLeftBorder}
                    includeBottomBorder={includeBottomBorder}
                    includeRightBorder={includeRightBorder}
                    includeTopBorder={false}
                >
                    {rowCells}
                </TableRow>
            ))
        );
    }
}
