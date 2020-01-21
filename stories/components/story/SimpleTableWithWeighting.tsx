import * as React from "react";
import {DataTableCell, Table, TableBody, TableCell, TableHeader} from "../../../src";
import {PdfContainer} from "../PdfContainer";
import {generateRandomData, HumanRow} from "../../data/Humans";
import {optionsKnob as options, text} from "@storybook/addon-knobs";

interface SimpleTableWithWeightingState {
    data: HumanRow[];
}

export class SimpleTableWithWeighting extends React.Component<{}, SimpleTableWithWeightingState> {
    state = {
        data: generateRandomData(20)
    };

    private generateWeightingOptions = (): {[key: string]: number}[] => {
        const result: any = {};
        for(let i = 1; i < 10; i++) {
            result[`${i * 10}%`] = i / 10;
        }

        return result;
    };

    render() {
        return (
            <PdfContainer>
                <Table
                    data={this.state.data}
                >
                    <TableHeader
                        textAlign={options("textAlign", {left: "left", center: "center", right: "right"}, undefined, {display: "select"})}
                        fontSize={text("fontSize", undefined)}
                    >
                        <TableCell
                            weighting={options("column 1 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                        >
                            First Name
                        </TableCell>
                        <TableCell
                            weighting={options("column 2 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                        >
                            Last Name
                        </TableCell>
                        <TableCell>
                            DOB
                        </TableCell>
                        <TableCell>
                            Country
                        </TableCell>
                        <TableCell>
                            Phone Number
                        </TableCell>
                    </TableHeader>
                    <TableBody
                        textAlign={options("textAlign", {left: "left", center: "center", right: "right"}, undefined, {display: "select"})}
                        fontSize={text("fontSize", undefined)}
                    >
                        <DataTableCell
                            weighting={options("column 1 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                            getContent={(r: HumanRow) => r.firstName}
                        />
                        <DataTableCell
                            weighting={options("column 2 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                            getContent={(r: HumanRow) => r.lastName}
                        />
                        <DataTableCell getContent={(r: HumanRow) => r.dob.toLocaleString()}/>
                        <DataTableCell getContent={(r: HumanRow) => r.country}/>
                        <DataTableCell getContent={(r: HumanRow) => r.phoneNumber}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
