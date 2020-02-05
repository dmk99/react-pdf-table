[@david.kucsai/react-pdf-table](../README.md) › [Globals](../globals.md) › ["Utils"](_utils_.md)

# External module: "Utils"

## Index

### Functions

* [getDefaultBorderIncludes](_utils_.md#getdefaultborderincludes)
* [transformToArray](_utils_.md#transformtoarray)

## Functions

###  getDefaultBorderIncludes

▸ **getDefaultBorderIncludes**(`border`: [TableBorder](../interfaces/_tablecell_.tableborder.md)): *[TableBorder](../interfaces/_tablecell_.tableborder.md)*

*Defined in [src/Utils.ts:9](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/Utils.ts#L9)*

Return whether particular borders need to be included.
If the value is undefined then return true for that border.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`border` | [TableBorder](../interfaces/_tablecell_.tableborder.md) | the border item to parse.  |

**Returns:** *[TableBorder](../interfaces/_tablecell_.tableborder.md)*

___

###  transformToArray

▸ **transformToArray**<**T**>(`items?`: T | T[]): *T[]*

*Defined in [src/Utils.ts:25](https://github.com/dmk99/react-pdf-table/blob/875b9cf/src/Utils.ts#L25)*

Transform a single item to an array (with one element).
Or return the array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items?` | T &#124; T[] | the item or items to transform to an array. |

**Returns:** *T[]*

an array of items or an empty array.
