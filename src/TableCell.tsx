import * as React from "react";
import ReactPDF, {Text, View} from "@react-pdf/renderer";
import {getDefaultBorderIncludes} from "./Utils";

/**
 * Whether to include borders or not.
 * Depending on the context some toggles will not have any effect.
 */
export interface TableBorder {
    /**
     * Include the top border. Default true.
     */
    includeTopBorder?: boolean;

    /**
     * Include the right border. Default true.
     */
    includeRightBorder?: boolean;

    /**
     * Include the bottom border. Default true.
     */
    includeBottomBorder?: boolean;

    /**
     * Include the left border. Default true.
     */
    includeLeftBorder?: boolean;
}

export interface TableCellProps extends TableBorder {
    /**
     * The weighting of a cell based on the flex layout styles.
     * This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.
     */
    weighting?: number;

    /**
     * Extra styling to apply. These will override existing styles with the same key.
     */
    styles?: ReactPDF.Style[];

    /**
     * How to align the text
     */
    textAlign?: "left" | "center" | "right";

    /**
     * Whether this is a header cell or not. If not defined it will be false.
     */
    isHeader?: boolean;

    /**
     * The font-size to apply to the cell.
     */
    fontSize?: number | string;
}

/**
 * This component displays the associated content of it's children.
 */
export class TableCell extends React.PureComponent<TableCellProps> {
    render() {
        let content: any = null;

        if (typeof this.props.children === "string") {
            content = (
                <Text>{this.props.children}</Text>
            )
        } else {
            content = this.props.children;
        }

        const {includeRightBorder} = getDefaultBorderIncludes(this.props);

        return (
            <View
                style={[
                    {
                        flex: this.props.weighting || 1,
                        justifyContent: "stretch",
                        textAlign: this.props.textAlign || "left",
                        fontSize: this.props.fontSize || (this.props.isHeader === true ? 14 : 12),
                        borderRight: includeRightBorder && "1pt solid black",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap"
                    },
                    ...this.props.styles
                ]}
                wrap={true}
            >
                {content}
            </View>
        );
    }
}
