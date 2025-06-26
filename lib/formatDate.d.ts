/**
 * Formats a date string into a short month and numeric year (e.g., "Jun 2025") using US English locale.
 *
 * @param {string} dateString - The date string to format (ISO 8601 or compatible).
 * @returns {string} Formatted date string with abbreviated month and year.
 */
export declare function formatDate(dateString: string): string;
/**
 * Converts an ISO UTC date string to a human-readable format: "Month Day, Year".
 *
 * @param dateString - A valid ISO date string (UTC or with timezone offset).
 * @returns A formatted string in the "Month Day, Year" format.
 */
export declare function formatUTCToMonthDayYear(dateString: string): string;
