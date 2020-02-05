[@david.kucsai/react-pdf-table](../README.md) › [Globals](../globals.md) › ["DataTableCell"](../modules/_datatablecell_.md) › [DataTableCellProps](_datatablecell_.datatablecellprops.md)

# Interface: DataTableCellProps

## Hierarchy

  ↳ [TableCellProps](_tablecell_.tablecellprops.md)

  ↳ **DataTableCellProps**

## Index

### Properties

* [data](_datatablecell_.datatablecellprops.md#optional-data)
* [fontSize](_datatablecell_.datatablecellprops.md#optional-fontsize)
* [getContent](_datatablecell_.datatablecellprops.md#getcontent)
* [includeBottomBorder](_datatablecell_.datatablecellprops.md#optional-includebottomborder)
* [includeLeftBorder](_datatablecell_.datatablecellprops.md#optional-includeleftborder)
* [includeRightBorder](_datatablecell_.datatablecellprops.md#optional-includerightborder)
* [includeTopBorder](_datatablecell_.datatablecellprops.md#optional-includetopborder)
* [isHeader](_datatablecell_.datatablecellprops.md#optional-isheader)
* [style](_datatablecell_.datatablecellprops.md#optional-style)
* [textAlign](_datatablecell_.datatablecellprops.md#optional-textalign)
* [weighting](_datatablecell_.datatablecellprops.md#optional-weighting)

## Properties

### `Optional` data

• **data**? : *any*

*Defined in [src/DataTableCell.tsx:8](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/DataTableCell.tsx#L8)*

The data associated with the cell.

___

### `Optional` fontSize

• **fontSize**? : *number | string*

*Inherited from [TableCellProps](_tablecell_.tablecellprops.md).[fontSize](_tablecell_.tablecellprops.md#optional-fontsize)*

*Defined in [src/TableCell.tsx:56](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L56)*

The font-size to apply to the cell.

___

###  getContent

• **getContent**: *function*

*Defined in [src/DataTableCell.tsx:14](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/DataTableCell.tsx#L14)*

The content to display for this cell.

**`param`** the data passed in.

#### Type declaration:

▸ (`data`: any): *React.ReactNode | Element | string | number*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

___

### `Optional` includeBottomBorder

• **includeBottomBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeBottomBorder](_tablecell_.tableborder.md#optional-includebottomborder)*

*Defined in [src/TableCell.tsx:23](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L23)*

Include the bottom border. Default true.

___

### `Optional` includeLeftBorder

• **includeLeftBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeLeftBorder](_tablecell_.tableborder.md#optional-includeleftborder)*

*Defined in [src/TableCell.tsx:28](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L28)*

Include the left border. Default true.

___

### `Optional` includeRightBorder

• **includeRightBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeRightBorder](_tablecell_.tableborder.md#optional-includerightborder)*

*Defined in [src/TableCell.tsx:18](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L18)*

Include the right border. Default true.

___

### `Optional` includeTopBorder

• **includeTopBorder**? : *boolean*

*Inherited from [TableBorder](_tablecell_.tableborder.md).[includeTopBorder](_tablecell_.tableborder.md#optional-includetopborder)*

*Defined in [src/TableCell.tsx:13](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L13)*

Include the top border. Default true.

___

### `Optional` isHeader

• **isHeader**? : *boolean*

*Inherited from [TableCellProps](_tablecell_.tablecellprops.md).[isHeader](_tablecell_.tablecellprops.md#optional-isheader)*

*Defined in [src/TableCell.tsx:51](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L51)*

Whether this is a header cell or not. If not defined it will be false.

___

### `Optional` style

• **style**? : *Style | Style[]*

*Inherited from [TableCellProps](_tablecell_.tablecellprops.md).[style](_tablecell_.tablecellprops.md#optional-style)*

*Defined in [src/TableCell.tsx:41](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L41)*

Extra styling to apply. These will override existing style with the same key.

___

### `Optional` textAlign

• **textAlign**? : *"left" | "center" | "right"*

*Inherited from [TableCellProps](_tablecell_.tablecellprops.md).[textAlign](_tablecell_.tablecellprops.md#optional-textalign)*

*Defined in [src/TableCell.tsx:46](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L46)*

How to align the text

___

### `Optional` weighting

• **weighting**? : *number*

*Inherited from [TableCellProps](_tablecell_.tablecellprops.md).[weighting](_tablecell_.tablecellprops.md#optional-weighting)*

*Defined in [src/TableCell.tsx:36](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/TableCell.tsx#L36)*

The weighting of a cell based on the flex layout style.
This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.
