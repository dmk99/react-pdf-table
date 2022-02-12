import * as React from "react";
import {getDefaultBorderIncludes} from "./Utils";
import {TableRow, TableRowProps} from "./TableRow";

export interface TableHeaderProps extends TableRowProps {
}

/**
 * This component displays the titles for the rows.
 */
export class TableHeader extends React.PureComponent<TableHeaderProps> {
    render() {
        let {includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder} = getDefaultBorderIncludes(this.props);

        const rowCells: any[] = React.Children.toArray(this.props.children);

        return (
            <TableRow
                {...this.props}
                key={"header"}
                includeLeftBorder={includeLeftBorder}
                includeBottomBorder={includeBottomBorder}
                includeRightBorder={includeRightBorder}
                includeTopBorder={includeTopBorder}
            >
                {
                    rowCells.map((rc, columnIndex) => React.cloneElement(rc, {
                        key: columnIndex,
                        isHeader: true,
                        fontSize: this.props.fontSize,
                        textAlign: this.props.textAlign,
                        includeLeftBorder: columnIndex === 0,
                        includeRightBorder: columnIndex !== (rowCells.length - 1)
                    }))
                }
            </TableRow>
        );
    }
}
