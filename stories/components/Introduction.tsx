import * as React from "react";

export default class Introduction extends React.PureComponent {
    render() {
        return (
            <div>
                <p>
                    This storybook documents how to use <strong>@david.kucsai/react-pdf-table</strong>.
                    <br/>
                    The library is specifically for use within <strong>@react-pdf/renderer</strong> components.
                    <br/>
                    Use the navigation on the left to see the different examples. The documentation is split up
                    into the main elements that make up the library, these are:
                    <ul>
                        <li>Table</li>
                        <li>
                            TableHeader
                            <ul>
                                <li>TableCell</li>
                            </ul>
                        </li>
                        <li>
                            TableBody
                            <ul>
                                <li>DataTableCell</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <hr/>
                <p>
                    <h1>Setup</h1>

                    <ol>
                        <li>Install react-pdf Run <pre>npm install @react-pdf/renderer</pre></li>
                        <li>Install react-pdf-table Run <pre>npm install @david.kucsai/react-pdf-table</pre></li>
                        <li>
                            In your PDF document add in your tables.
                        </li>
                    </ol>
                </p>
                <hr/>
                <p>
                    The goal of this project was to implement a table in a declarative style to work with the react-pdf
                    library.
                </p>
                <p>
                    <strong>Note: </strong> You should not use TableRow directly.
                </p>
                <p>
                    Below is a description of the different components. The text in brackets indicates what the
                    most similar HTML element would be.
                    <br/>
                    <br/>
                    A Table (table) is the main container. This generally passes the data down into the components.
                    <br/>
                    The TableHeader (th) contains the title columns, each column is defined by the TableCell (td) children.
                    <br/>
                    The TableBody (tr) contains how the rows need to be displayed. Each column is defined by the
                    DataTableCell (td) children.
                </p>
            </div>
        )
    }
}
