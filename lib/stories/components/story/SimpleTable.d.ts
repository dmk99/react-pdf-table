import * as React from "react";
import { HumanRow } from "../../data/Humans";
interface SimpleTableHeaderState {
    data: HumanRow[];
}
export declare class SimpleTable extends React.Component<{}, SimpleTableHeaderState> {
    state: {
        data: HumanRow[];
    };
    render(): JSX.Element;
}
export {};
