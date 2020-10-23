# @david.kucsai/react-pdf-table

This library is designed to be used with [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer).

The goal behind this library is to provide a declarative way of defining tables in a PDF.

[![npm version](http://img.shields.io/npm/v/@david.kucsai/react-pdf-table.svg?style=flat)](https://npmjs.org/package/@david.kucsai/react-pdf-table "View this project on npm")

To get started run:

```
 npm install "@david.kucsai/react-pdf-table"
 ```
 
 On Windows you must escape the '.':
 ```
 npm install "@david`.kucsai/react-pdf-table"
 ```
 

## Documentation

Refer to [API Documentation](https://github.com/dmk99/react-pdf-table/tree/master/docs/typedoc/README.md) for the type definitions.

### Notes

- Layout uses `flex` behind the scenes. 
- If `weighting` is not defined for a table cell then it will default to the remaining unassigned weightings.
    - `weighting` should be between 0..1. Preferably adding up to `<= 1`.
- If you have lots of rows to display it's recommended to batch up the rows and render them on separate pages to ensure 
    that values are not cut off.
- Content in `TableCell` and `DataTableCell` must either evaluate to a `string` or a `@react-pdf/renderer` component
e.g. `View`, `Text` etc. If the content is a `string` it will be wrapped with a `Text` element.
- `TableCell`s and `DataTableCell`s can override a lot of the configuration passed to them.

### Examples

#### Simple Example

This example will render a header and one row using the default styling.

```jsx
<PDFViewer>
    <Document>
        <Page>
            <Table
                data={[
                    {firstName: "John", lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000"}
                ]}
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
                    <DataTableCell getContent={(r) => r.firstName}/>
                    <DataTableCell getContent={(r) => r.lastName}/>
                    <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                    <DataTableCell getContent={(r) => r.country}/>
                    <DataTableCell getContent={(r) => r.phoneNumber}/>
                </TableBody>
            </Table>
        </Page>
    </Document>
</PDFViewer>
```

#### Formatting Example - Aligning Text and Weightings for columns

This example will render a header and one row using the default styling.

```jsx
<PDFViewer>
    <Document>
        <Page>
            <Table
                data={[
                    {firstName: "John", lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000"}
                ]}
            >
                <TableHeader textAlign={"center"}>
                    <TableCell weighting={0.3}>
                        First Name
                    </TableCell>
                    <TableCell weighting={0.3}>
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
                    <DataTableCell weighting={0.3} getContent={(r) => r.firstName}/>
                    <DataTableCell weighting={0.3} getContent={(r) => r.lastName}/>
                    <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                    <DataTableCell getContent={(r) => r.country}/>
                    <DataTableCell getContent={(r) => r.phoneNumber}/>
                </TableBody>
            </Table>
        </Page>
    </Document>
</PDFViewer>
```

## Running Locally

To run the storybook:
```
yarn storybook
```

Compile to typescript: 
```
yarn recompile
```

Build (Clean & Compile):
```
yarn build
```

Run tests:
```
yarn test
```
