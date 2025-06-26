# Date Utils

A simple TypeScript utility function to format UTC date strings into "Month Day, Year" format.

## Installation

You can install this utility directly from GitHub in your Next.js or JavaScript projects.

Using npm:

```bash
npm install github:your-username/date-utils
```

Using yarn:

```bash
yarn add github:your-username/date-utils
```

## Usage

Import the function and use it to format UTC date strings:

```ts
import { formatUTCToMonthDayYear } from "date-utils/src/formatDate";

const formattedDate = formatUTCToMonthDayYear("2025-06-06T00:00:00.000-05:00");
console.log(formattedDate); // Output: June 6, 2025
```

## Development

1. Clone the repo:

```bash
git clone https://github.com/your-username/date-utils.git
```

2. Make your changes.

3. Commit and push.

## License

MIT License
