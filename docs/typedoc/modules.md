[@david.kucsai/react-pdf-table](README.md) / Exports

# @david.kucsai/react-pdf-table

## Table of contents

### Classes

- [DataTableCell](classes/DataTableCell.md)
- [Table](classes/Table.md)
- [TableBody](classes/TableBody.md)
- [TableCell](classes/TableCell.md)
- [TableHeader](classes/TableHeader.md)

### Interfaces

- [DataTableCellProps](interfaces/DataTableCellProps.md)
- [TableBodyProps](interfaces/TableBodyProps.md)
- [TableBorder](interfaces/TableBorder.md)
- [TableCellProps](interfaces/TableCellProps.md)
- [TableHeaderProps](interfaces/TableHeaderProps.md)
- [TableProps](interfaces/TableProps.md)
- [ZebraProps](interfaces/ZebraProps.md)

### Functions

- [getDefaultBorderIncludes](modules.md#getdefaultborderincludes)
- [transformToArray](modules.md#transformtoarray)

## Functions

### getDefaultBorderIncludes

▸ **getDefaultBorderIncludes**(`border`): [`TableBorder`](interfaces/TableBorder.md)

Return whether particular borders need to be included.
If the value is undefined then return true for that border.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `border` | [`TableBorder`](interfaces/TableBorder.md) | the border item to parse. |

#### Returns

[`TableBorder`](interfaces/TableBorder.md)

#### Defined in

[src/Utils.ts:9](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Utils.ts#L9)

___

### transformToArray

▸ **transformToArray**<`T`\>(`items?`): `T`[]

Transform a single item to an array (with one element).
Or return the array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items?` | `T` \| `T`[] | the item or items to transform to an array. |

#### Returns

`T`[]

an array of items or an empty array.

#### Defined in

[src/Utils.ts:25](https://github.com/dmk99/react-pdf-table/blob/ddcba28/src/Utils.ts#L25)
