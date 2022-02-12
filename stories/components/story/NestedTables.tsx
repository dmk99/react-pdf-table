import * as React from "react";
import {generateRandomData, HumanRow} from "../../data/Humans";
import {PdfContainer} from "../PdfContainer";
import {DataTableCell, Table, TableBody, TableCell, TableHeader} from "../../../src";

interface NestedTablesState {
    data: HumanRow[];
}

export class NestedTables extends React.Component<void, NestedTablesState> {
    state = {
        data: generateRandomData(20)
    };

    render() {
        return (
            <PdfContainer>
                <Table
                    data={this.state.data}
                >
                    <TableHeader>
                        <TableCell>
                            First Name
                        </TableCell>
                        <TableCell>
                            Last Name
                        </TableCell>
                        <TableCell>
                            DOB
                        </TableCell>
                        <TableCell>
                            Country
                        </TableCell>
                        <TableCell>
                            <Table>
                                <TableHeader
                                    fontSize={8}
                                    textAlign={"center"}
                                    includeTopBorder={false}
                                    includeBottomBorder={false}
                                    includeLeftBorder={false}
                                    includeRightBorder={false}
                                >
                                    <TableCell>One</TableCell>
                                    <TableCell>Two</TableCell>
                                    <TableCell>Three</TableCell>
                                    <TableCell>Four</TableCell>
                                </TableHeader>
                            </Table>
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell getContent={(r: HumanRow) => r.firstName}/>
                        <DataTableCell getContent={(r: HumanRow) => r.lastName}/>
                        <DataTableCell getContent={(r: HumanRow) => r.dob.toLocaleString()}/>
                        <DataTableCell getContent={(r: HumanRow) => r.country}/>
                        <DataTableCell getContent={(r: HumanRow) => (
                            <Table
                                data={[r]}
                                isNested={true}
                            >
                                <TableBody
                                    textAlign={"center"}
                                    includeTopBorder={false}
                                    includeBottomBorder={false}
                                    includeLeftBorder={false}
                                    includeRightBorder={false}
                                >
                                    <DataTableCell getContent={(r: HumanRow) => r.randomValues.one}/>
                                    <DataTableCell getContent={(r: HumanRow) => r.randomValues.two}/>
                                    <DataTableCell getContent={(r: HumanRow) => r.randomValues.three}/>
                                    <DataTableCell getContent={(r: HumanRow) => r.randomValues.four}/>
                                </TableBody>
                            </Table>
                        )}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
