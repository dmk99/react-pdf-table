[@david.kucsai/react-pdf-table](../README.md) / [Exports](../modules.md) / ZebraProps

# Interface: ZebraProps

## Hierarchy

- **`ZebraProps`**

  ↳ [`TableProps`](TableProps.md)

## Table of contents

### Properties

- [evenRowColor](ZebraProps.md#evenrowcolor)
- [oddRowColor](ZebraProps.md#oddrowcolor)
- [zebra](ZebraProps.md#zebra)

## Properties

### evenRowColor

• `Optional` **evenRowColor**: `string`

The even row colour when {@see zebra} is true.
Defaults to lightgray if not defined.

#### Defined in

[src/Table.tsx:17](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L17)

___

### oddRowColor

• `Optional` **oddRowColor**: `string`

The odd row colour when {@see zebra} is true.
Defaults to transparent or '' if not defined.

#### Defined in

[src/Table.tsx:23](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L23)

___

### zebra

• `Optional` **zebra**: `boolean`

Whether to display alternate row colours.
Defaults to false.

#### Defined in

[src/Table.tsx:11](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L11)
