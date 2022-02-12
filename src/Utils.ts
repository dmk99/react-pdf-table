import {TableBorder} from "./TableCell";

/**
 * Return whether particular borders need to be included.
 * If the value is undefined then return true for that border.
 *
 * @param border the border item to parse.
 */
export function getDefaultBorderIncludes(border: TableBorder): TableBorder {
    return {
        includeBottomBorder: border.includeBottomBorder ?? true,
        includeTopBorder: border.includeTopBorder ?? true,
        includeLeftBorder: border.includeLeftBorder ?? true,
        includeRightBorder: border.includeRightBorder ?? true,
    }
}

/**
 * Transform a single item to an array (with one element).
 * Or return the array.
 *
 * @param items the item or items to transform to an array.
 * @return an array of items or an empty array.
 */
export function transformToArray<T>(items?: T | T[]): T[] {
    if(items === undefined) {
        return [];
    }

    if(Array.isArray(items)) {
        return items;
    }

    return [items];
}
