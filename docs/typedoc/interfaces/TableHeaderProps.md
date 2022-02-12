[@david.kucsai/react-pdf-table](../README.md) / [Exports](../modules.md) / TableHeaderProps

# Interface: TableHeaderProps

## Hierarchy

- `TableRowProps`

  ↳ **`TableHeaderProps`**

## Table of contents

### Properties

- [data](TableHeaderProps.md#data)
- [even](TableHeaderProps.md#even)
- [evenRowColor](TableHeaderProps.md#evenrowcolor)
- [fontSize](TableHeaderProps.md#fontsize)
- [includeBottomBorder](TableHeaderProps.md#includebottomborder)
- [includeLeftBorder](TableHeaderProps.md#includeleftborder)
- [includeRightBorder](TableHeaderProps.md#includerightborder)
- [includeTopBorder](TableHeaderProps.md#includetopborder)
- [oddRowColor](TableHeaderProps.md#oddrowcolor)
- [textAlign](TableHeaderProps.md#textalign)
- [zebra](TableHeaderProps.md#zebra)

## Properties

### data

• `Optional` **data**: `any`

Any data associated, relevant if the parent is a {@see DataTableCell}.

#### Inherited from

TableRowProps.data

#### Defined in

[src/TableRow.tsx:22](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L22)

___

### even

• `Optional` **even**: `boolean`

Whether this row is even (true) or odd (false)

#### Inherited from

TableRowProps.even

#### Defined in

[src/TableRow.tsx:32](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L32)

___

### evenRowColor

• `Optional` **evenRowColor**: `string`

Specify the color of even rows

#### Inherited from

TableRowProps.evenRowColor

#### Defined in

[src/TableRow.tsx:37](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L37)

___

### fontSize

• `Optional` **fontSize**: `string` \| `number`

The font size as a valid unit defined in react-pdf.

#### Inherited from

TableRowProps.fontSize

#### Defined in

[src/TableRow.tsx:12](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L12)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: `boolean`

Include the bottom border. Default true.

#### Inherited from

TableRowProps.includeBottomBorder

#### Defined in

[src/TableCell.tsx:23](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableCell.tsx#L23)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: `boolean`

Include the left border. Default true.

#### Inherited from

TableRowProps.includeLeftBorder

#### Defined in

[src/TableCell.tsx:28](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableCell.tsx#L28)

___

### includeRightBorder

• `Optional` **includeRightBorder**: `boolean`

Include the right border. Default true.

#### Inherited from

TableRowProps.includeRightBorder

#### Defined in

[src/TableCell.tsx:18](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableCell.tsx#L18)

___

### includeTopBorder

• `Optional` **includeTopBorder**: `boolean`

Include the top border. Default true.

#### Inherited from

TableRowProps.includeTopBorder

#### Defined in

[src/TableCell.tsx:13](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableCell.tsx#L13)

___

### oddRowColor

• `Optional` **oddRowColor**: `string`

Specify the color of odd rows

#### Inherited from

TableRowProps.oddRowColor

#### Defined in

[src/TableRow.tsx:42](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L42)

___

### textAlign

• `Optional` **textAlign**: ``"left"`` \| ``"center"`` \| ``"right"``

Whether to align the text. Defaults to left.

#### Inherited from

TableRowProps.textAlign

#### Defined in

[src/TableRow.tsx:17](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L17)

___

### zebra

• `Optional` **zebra**: `boolean`

Whether rows have alternating styles

#### Inherited from

TableRowProps.zebra

#### Defined in

[src/TableRow.tsx:27](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/TableRow.tsx#L27)
