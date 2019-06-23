import * as React from "react";
import { HumanRow } from "../../data/Humans";
interface SimpleTableWithWeightingState {
    data: HumanRow[];
}
export declare class SimpleTableWithWeighting extends React.Component<{}, SimpleTableWithWeightingState> {
    state: {
        data: HumanRow[];
    };
    private generateWeightingOptions;
    render(): JSX.Element;
}
export {};
