[@david.kucsai/react-pdf-table](../README.md) › [Globals](../globals.md) › ["TableRow"](../modules/_tablerow_.md) › [TableRowProps](_tablerow_.tablerowprops.md)

# Interface: TableRowProps

## Hierarchy

* [TableBorder](_tablecell_.tableborder.md)

  ↳ **TableRowProps**

  ↳ [TableBodyProps](_tablebody_.tablebodyprops.md)

  ↳ [TableHeaderProps](_tableheader_.tableheaderprops.md)

## Index

### Properties

* [data](_tablerow_.tablerowprops.md#optional-data)
* [fontSize](_tablerow_.tablerowprops.md#optional-fontsize)
* [includeBottomBorder](_tablerow_.tablerowprops.md#optional-includebottomborder)
* [includeLeftBorder](_tablerow_.tablerowprops.md#optional-includeleftborder)
* [includeRightBorder](_tablerow_.tablerowprops.md#optional-includerightborder)
* [includeTopBorder](_tablerow_.tablerowprops.md#optional-includetopborder)
* [textAlign](_tablerow_.tablerowprops.md#optional-textalign)

## Properties

### `Optional` data

• **data**? : *any*

*Defined in [src/TableRow.tsx:22](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableRow.tsx#L22)*

Any data associated, relevant if the parent is a {@see DataTableCell}.

___

### `Optional` fontSize

• **fontSize**? : *number | string*

*Defined in [src/TableRow.tsx:12](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableRow.tsx#L12)*

The font size as a valid unit defined in react-pdf.

___

### `Optional` includeBottomBorder

• **includeBottomBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeBottomBorder](_tablecell_.tableborder.md#optional-includebottomborder)*

*Defined in [src/TableCell.tsx:23](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L23)*

Include the bottom border. Default true.

___

### `Optional` includeLeftBorder

• **includeLeftBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeLeftBorder](_tablecell_.tableborder.md#optional-includeleftborder)*

*Defined in [src/TableCell.tsx:28](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L28)*

Include the left border. Default true.

___

### `Optional` includeRightBorder

• **includeRightBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeRightBorder](_tablecell_.tableborder.md#optional-includerightborder)*

*Defined in [src/TableCell.tsx:18](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L18)*

Include the right border. Default true.

___

### `Optional` includeTopBorder

• **includeTopBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeTopBorder](_tablecell_.tableborder.md#optional-includetopborder)*

*Defined in [src/TableCell.tsx:13](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L13)*

Include the top border. Default true.

___

### `Optional` textAlign

• **textAlign**? : *"left" | "center" | "right"*

*Defined in [src/TableRow.tsx:17](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableRow.tsx#L17)*

Whether to align the text. Defaults to left.
