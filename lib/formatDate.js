"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.formatUTCToMonthDayYear = formatUTCToMonthDayYear;
/**
 * Formats a date string into a short month and numeric year (e.g., "Jun 2025") using US English locale.
 *
 * @param {string} dateString - The date string to format (ISO 8601 or compatible).
 * @returns {string} Formatted date string with abbreviated month and year.
 */
function formatDate(dateString) {
    return new Date(dateString).toLocaleString('en-US', { month: 'short', year: 'numeric' });
}
/**
 * Converts an ISO UTC date string to a human-readable format: "Month Day, Year".
 *
 * Example:
 *   "2025-06-06T00:00:00.000-05:00" → "June 6, 2025"
 *
 * @param dateString - A valid ISO date string (UTC or with timezone offset).
 * @returns A formatted string in the "Month Day, Year" format.
 */
function formatUTCToMonthDayYear(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
