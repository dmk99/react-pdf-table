/**
 * Return whether particluar borders need to be included. If the value is undefined then return true for that border.
 * @param border
 */
import {TableBorder} from "./TableCell";

export function getDefaultBorderIncludes(border: TableBorder): TableBorder {
    return {
        includeBottomBorder: border.includeBottomBorder === undefined ? true : border.includeBottomBorder,
        includeTopBorder: border.includeTopBorder === undefined ? true : border.includeTopBorder,
        includeLeftBorder: border.includeLeftBorder === undefined ? true : border.includeLeftBorder,
        includeRightBorder: border.includeRightBorder === undefined ? true : border.includeRightBorder,
    }
}
