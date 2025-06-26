# Date Utility

A simple TypeScript utility package to format ISO UTC date strings.

## Installation

```bash
npm install github:jabercrombia/date-utility
```

## Usage

```ts
import { formatDate, formatUTCToMonthDayYear } from "@jabercrombia/date-utility";

console.log(formatDate("2025-06-06T00:00:00.000-05:00")); // Jun 2025
console.log(formatUTCToMonthDayYear("2025-06-06T00:00:00.000-05:00")); // June 6, 2025
```

## License

MIT
