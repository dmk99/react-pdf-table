import * as React from "react";
import {TableCell, TableCellProps} from "./TableCell";

interface DataTableCellProps extends TableCellProps {
    /**
     * The data associated with the cell.
     */
    data?: any;

    /**
     * The content to display for this cell.
     * @param data the data passed in.
     */
    getContent: (data: any) => JSX.Element | string;
}

/**
 * This component is used to display data in the the {@see TableRow} component.
 */
export class DataTableCell extends React.PureComponent<DataTableCellProps> {
    render() {
        return (
            <TableCell
                {...this.props}
            >
                {this.props.getContent(this.props.data)}
            </TableCell>
        )
    }
}
