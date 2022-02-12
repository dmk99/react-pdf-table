import {TableRow, TableRowProps} from "./TableRow";
import * as React from "react";
import {getDefaultBorderIncludes} from "./Utils";
import {ZebraProps} from "./Table";

export interface TableBodyProps extends TableRowProps, Pick<ZebraProps, "zebra"> {
    /**
     * The data associated with the table.
     */
    data?: any[];

    /**
     * Allows control of the very top border of the TableBody to be toggled on and off
     * if there is no header.
     */
    renderTopBorder?: boolean
}

/**
 * This component displays the data as {@see TableRow}s.
 */
export class TableBody extends React.PureComponent<TableBodyProps> {
    render() {
        const rowCells: React.ReactNode[] = React.Children.toArray(this.props.children);
        const {includeLeftBorder, includeBottomBorder, includeRightBorder} = getDefaultBorderIncludes(this.props);
        const dataRows = this.props.data ?? [];

        return (
            (dataRows).map((data, rowIndex) => (
                <TableRow
                    {...this.props}
                    key={rowIndex}
                    even={rowIndex % 2 === 0}
                    data={data}
                    includeLeftBorder={includeLeftBorder}
                    includeBottomBorder={includeBottomBorder}
                    includeRightBorder={includeRightBorder}
                    includeTopBorder={this.props.renderTopBorder ?? false}
                >
                    {rowCells}
                </TableRow>
            ))
        );
    }
}
