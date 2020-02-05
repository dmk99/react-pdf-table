[@david.kucsai/react-pdf-table](../README.md) › [Globals](../globals.md) › ["TableCell"](../modules/_tablecell_.md) › [TableCellProps](_tablecell_.tablecellprops.md)

# Interface: TableCellProps

## Hierarchy

* [TableBorder](_tablecell_.tableborder.md)

  ↳ **TableCellProps**

  ↳ [DataTableCellProps](_datatablecell_.datatablecellprops.md)

## Index

### Properties

* [fontSize](_tablecell_.tablecellprops.md#optional-fontsize)
* [includeBottomBorder](_tablecell_.tablecellprops.md#optional-includebottomborder)
* [includeLeftBorder](_tablecell_.tablecellprops.md#optional-includeleftborder)
* [includeRightBorder](_tablecell_.tablecellprops.md#optional-includerightborder)
* [includeTopBorder](_tablecell_.tablecellprops.md#optional-includetopborder)
* [isHeader](_tablecell_.tablecellprops.md#optional-isheader)
* [styles](_tablecell_.tablecellprops.md#optional-styles)
* [textAlign](_tablecell_.tablecellprops.md#optional-textalign)
* [weighting](_tablecell_.tablecellprops.md#optional-weighting)

## Properties

### `Optional` fontSize

• **fontSize**? : *number | string*

*Defined in [src/TableCell.tsx:56](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L56)*

The font-size to apply to the cell.

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

### `Optional` isHeader

• **isHeader**? : *boolean*

*Defined in [src/TableCell.tsx:51](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L51)*

Whether this is a header cell or not. If not defined it will be false.

___

### `Optional` styles

• **styles**? : *Style | Style[]*

*Defined in [src/TableCell.tsx:41](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L41)*

Extra styling to apply. These will override existing styles with the same key.

___

### `Optional` textAlign

• **textAlign**? : *"left" | "center" | "right"*

*Defined in [src/TableCell.tsx:46](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L46)*

How to align the text

___

### `Optional` weighting

• **weighting**? : *number*

*Defined in [src/TableCell.tsx:36](https://github.com/dmk99/react-pdf-table/blob/a0dbc7d/src/TableCell.tsx#L36)*

The weighting of a cell based on the flex layout styles.
This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.
