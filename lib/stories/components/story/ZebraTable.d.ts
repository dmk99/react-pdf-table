import * as React from "react";
import { HumanRow } from "../../data/Humans";
interface ZebraTableHeaderState {
    data: HumanRow[];
}
export declare class ZebraTable extends React.Component<{}, ZebraTableHeaderState> {
    state: {
        data: HumanRow[];
    };
    render(): JSX.Element;
}
export {};
