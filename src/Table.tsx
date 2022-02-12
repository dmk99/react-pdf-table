import * as React from "react";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {View} from "@react-pdf/renderer";

interface TableProps {
    data?: any[];
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
}

export class Table extends React.PureComponent<TableProps> {
    render() {
        let tableHeader: JSX.Element = null;
        let tableBody: JSX.Element = null;

        React.Children.forEach(this.props.children, (c: any) => {
            if (c?.type === TableHeader) {
                tableHeader = c;
            } else if (c?.type === TableBody) {
                tableBody = c;
            }
        });

        tableBody = React.cloneElement(tableBody, {
            data: tableBody.props.data ?? this.props.data ?? [],
            renderTopBorder: !tableHeader,
            zebra: tableBody.props.zebra ?? this.props.zebra ?? false,
            evenRowColor: tableBody.props.evenRowColor ?? this.props.evenRowColor ?? '',
            oddRowColor: tableBody.props.oddRowColor ?? this.props.oddRowColor ?? '',
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
