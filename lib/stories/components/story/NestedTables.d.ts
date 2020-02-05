import * as React from "react";
import { HumanRow } from "../../data/Humans";
interface NestedTablesState {
    data: HumanRow[];
}
export declare class NestedTables extends React.Component<void, NestedTablesState> {
    state: {
        data: HumanRow[];
    };
    render(): JSX.Element;
}
export {};
