import * as React from "react";
import {PureComponent} from "react";
import {Document, Page, PDFViewer} from "@react-pdf/renderer";
import {optionsKnob as options} from "@storybook/addon-knobs";

interface PdfContainerProps {
    children?: any;
    orientation?: "landscape" | "portrait";
    pageSize?: "A4";
}

export class PdfContainer extends PureComponent<PdfContainerProps> {
    render() {
        return (
            <PDFViewer
                style={{
                    width: "100%",
                    height: "90vh"
                }}
            >
                <Document>
                    <Page
                        orientation={options("Page: orientation", {
                            portrait: "portrait",
                            landscape: "landscape"
                        }, "portrait", {display: "select"})}
                        size={this.props.pageSize ?? "A4"}
                        style={{
                            margin: 20,
                            paddingRight: 40
                        }}
                    >
                        {this.props.children}
                    </Page>
                </Document>
            </PDFViewer>
        )
    }
}
