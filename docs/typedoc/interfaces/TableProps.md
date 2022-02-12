[@david.kucsai/react-pdf-table](../README.md) / [Exports](../modules.md) / TableProps

# Interface: TableProps

## Hierarchy

- [`ZebraProps`](ZebraProps.md)

  ↳ **`TableProps`**

## Table of contents

### Properties

- [data](TableProps.md#data)
- [evenRowColor](TableProps.md#evenrowcolor)
- [isNested](TableProps.md#isnested)
- [oddRowColor](TableProps.md#oddrowcolor)
- [zebra](TableProps.md#zebra)

## Properties

### data

• `Optional` **data**: `any`[]

The table data to display.

#### Defined in

[src/Table.tsx:30](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L30)

___

### evenRowColor

• `Optional` **evenRowColor**: `string`

The even row colour when {@see zebra} is true.
Defaults to lightgray if not defined.

#### Inherited from

[ZebraProps](ZebraProps.md).[evenRowColor](ZebraProps.md#evenrowcolor)

#### Defined in

[src/Table.tsx:17](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L17)

___

### isNested

• `Optional` **isNested**: `boolean`

Indicates that this is a nested table.
Otherwise assumed to be false.

#### Defined in

[src/Table.tsx:36](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L36)

___

### oddRowColor

• `Optional` **oddRowColor**: `string`

The odd row colour when {@see zebra} is true.
Defaults to transparent or '' if not defined.

#### Inherited from

[ZebraProps](ZebraProps.md).[oddRowColor](ZebraProps.md#oddrowcolor)

#### Defined in

[src/Table.tsx:23](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L23)

___

### zebra

• `Optional` **zebra**: `boolean`

Whether to display alternate row colours.
Defaults to false.

#### Inherited from

[ZebraProps](ZebraProps.md).[zebra](ZebraProps.md#zebra)

#### Defined in

[src/Table.tsx:11](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Table.tsx#L11)
