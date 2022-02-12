import * as React from "react";
import {TableBorder, TableCell} from "./TableCell";
import {DataTableCell} from "./DataTableCell";
import {View} from "@react-pdf/renderer";
import {getDefaultBorderIncludes} from "./Utils";
import {TableBodyProps} from "./TableBody";

export interface TableRowProps extends TableBorder {
    /**
     * The font size as a valid unit defined in react-pdf.
     */
    fontSize?: number | string;

    /**
     * Whether to align the text. Defaults to left.
     */
    textAlign?: "left" | "center" | "right";

    /**
     * Any data associated, relevant if the parent is a {@see DataTableCell}.
     */
    data?: any;

    /**
     * Whether rows have alternating styles
     */
    zebra?: boolean;

    /**
     * Whether this row is even (true) or odd (false)
     */
    even?: boolean;

    /**
     * Specify the color of even rows
     */
    evenRowColor?: string;

    /**
     * Specify the color of odd rows
     */
    oddRowColor?: string;
}

/**
 * This component describes how to display a row.
 */
export class TableRow extends React.PureComponent<Partial<TableBodyProps>> {
    render() {
        const rowCells: any[] = React.Children.toArray(this.props.children);
        const {includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder} = getDefaultBorderIncludes(this.props);

        let remainingWeighting = 1;
        let numberOfWeightingsDefined = 0;
        rowCells.forEach((i: TableCell | DataTableCell) => {
            if (i.props.weighting !== undefined) {
                remainingWeighting -= i.props.weighting;
                numberOfWeightingsDefined++;
            }
        });

        const weightingsPerNotSpecified = Math.ceil(remainingWeighting / (rowCells.length - numberOfWeightingsDefined));

        const rowColor = ((this.props.zebra || this.props.evenRowColor) && this.props.even) ? this.props.evenRowColor || 'lightgray' : this.props.oddRowColor || '';

        return (
            <View
                style={{
                    borderBottom: includeBottomBorder === true ? "1pt solid black" : 0,
                    borderRight: includeRightBorder === true ? "1pt solid black" : 0,
                    borderLeft: includeLeftBorder === true ? "1pt solid black" : 0,
                    borderTop: includeTopBorder === true ? "1pt solid black" : 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: rowColor,
                }}
            >
                {
                    rowCells.map((rc, columnIndex) => React.cloneElement(rc, {
                        weighting: rc.props.weighting ?? weightingsPerNotSpecified,
                        data: this.props.data,
                        key: columnIndex,
                        fontSize: this.props.fontSize,
                        textAlign: this.props.textAlign,
                        includeLeftBorder: columnIndex === 0,
                        includeRightBorder: columnIndex !== (rowCells.length - 1)
                    }))
                }
            </View>
        );
    }
}
