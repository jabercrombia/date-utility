# Date Utilities

This package provides simple TypeScript utility functions to format date strings into readable formats.

## 📦 Installation

You can install this utility directly from GitHub in your Next.js or TypeScript project.

Using **npm**:

```bash
npm install github:jabercrombia/date-utility
```

## Functions

### `formatDate(dateString: string): string`

Formats a date string into a short month and numeric year (e.g., "Jun 2025") using the US English locale.

**Parameters:**
- `dateString`: The date string to format (ISO 8601 or compatible).

**Returns:**
- Formatted date string with abbreviated month and year.

### `formatUTCToMonthDayYear(dateString: string): string`

Converts an ISO UTC date string to a human-readable format: "Month Day, Year".

**Example:** `"2025-06-06T00:00:00.000-05:00"` → `"June 6, 2025"`

**Parameters:**
- `dateString`: A valid ISO date string (UTC or with timezone offset).

**Returns:**
- A formatted string in the "Month Day, Year" format.

## Usage

```ts
import { formatDate, formatUTCToMonthDayYear } from "@jabercrombia/date-utils";

console.log(formatDate("2025-06-06T00:00:00.000-05:00")); // Jun 2025
console.log(formatUTCToMonthDayYear("2025-06-06T00:00:00.000-05:00")); // June 6, 2025
```

## Troubeshoot

If you are running into issues during the install run the below commands. It will remove the node_modules directory and package-lock.json. Then try rerunning the installation. 

```bash
rm -rf node_modules
rm package-lock.json

```

## License

MIT License
