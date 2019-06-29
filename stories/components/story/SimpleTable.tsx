import * as React from "react";
import {DataTableCell, Table, TableBody, TableCell, TableHeader} from "../../../src";
import {PdfContainer} from "../PdfContainer";
import {generateRandomData, HumanRow} from "../../data/Humans";

interface SimpleTableHeaderState {
    data: HumanRow[];
}

export class SimpleTable extends React.Component<{}, SimpleTableHeaderState> {
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
                            Phone Number
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell getContent={(r: HumanRow) => r.firstName}/>
                        <DataTableCell getContent={(r: HumanRow) => r.lastName}/>
                        <DataTableCell getContent={(r: HumanRow) => r.dob.toLocaleString()}/>
                        <DataTableCell getContent={(r: HumanRow) => r.country}/>
                        <DataTableCell getContent={(r: HumanRow) => r.phoneNumber}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
