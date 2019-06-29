import { PureComponent } from "react";
interface PdfContainerProps {
    children?: any;
    orientation?: "landscape" | "portrait";
    pageSize?: "A4";
}
export declare class PdfContainer extends PureComponent<PdfContainerProps> {
    render(): JSX.Element;
}
export {};
