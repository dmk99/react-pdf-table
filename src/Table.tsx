import * as React from "react";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {View} from "@react-pdf/renderer";

export interface ZebraProps {
    /**
     * Whether to display alternate row colours.
     * Defaults to false.
     */
    zebra?: boolean;

    /**
     * The even row colour when {@see zebra} is true.
     * Defaults to lightgray if not defined.
     */
    evenRowColor?: string;

    /**
     * The odd row colour when {@see zebra} is true.
     * Defaults to transparent or '' if not defined.
     */
    oddRowColor?: string;
}

export interface TableProps extends ZebraProps {
    /**
     * The table data to display.
     */
    data?: any[];

    /**
     * Indicates that this is a nested table.
     * Otherwise assumed to be false.
     */
    isNested?: boolean;
}

export class Table extends React.PureComponent<TableProps> {
    render() {
        let tableHeader: React.ReactElement = null;
        let tableBody: React.ReactElement = null;

        React.Children.forEach(this.props.children, (c: React.ReactElement) => {
            if (c?.type === TableHeader) {
                tableHeader = c;
            } else if (c?.type === TableBody) {
                tableBody = c;
            }
        });

        if(tableBody === null) {
            tableBody = React.createElement(TableBody);
        }

        tableBody = React.cloneElement(tableBody, {
            data: tableBody?.props?.data ?? this.props.data ?? [],
            renderTopBorder: this.props.isNested ? false : !tableHeader,
            zebra: tableBody?.props?.zebra ?? this.props.zebra ?? false,
            evenRowColor: tableBody?.props?.evenRowColor ?? this.props.evenRowColor ?? '',
            oddRowColor: tableBody?.props?.oddRowColor ?? this.props.oddRowColor ?? '',
        });

        return (
            <View
                style={{
                    width: "100%",
                }}
            >
                {tableHeader}
                {tableBody}
            </View>
        );
    }
}
