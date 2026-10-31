const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { test } = require('node:test');
const path = require('node:path');

const modulePath = process.env.FORMAT_DATE_MODULE || path.resolve(__dirname, '../lib/formatDate.js');
const childScript = `
  const { formatDate, formatUTCToMonthDayYear } = require(process.env.FORMAT_DATE_MODULE);
  process.stdout.write(JSON.stringify({
    example: formatUTCToMonthDayYear('2025-06-06T00:00:00.000-05:00'),
    boundary: formatUTCToMonthDayYear('2025-01-01T00:30:00.000+09:00'),
    localMonth: formatDate('2025-01-01T00:30:00.000Z'),
  }));
`;

const cases = [
  { timezone: 'UTC', localMonth: 'Jan 2025' },
  { timezone: 'America/Los_Angeles', localMonth: 'Dec 2024' },
  { timezone: 'Asia/Tokyo', localMonth: 'Jan 2025' },
];

for (const { timezone, localMonth } of cases) {
  test(`UTC date formatting is timezone-independent in ${timezone}`, () => {
    const result = spawnSync(process.execPath, ['-e', childScript], {
      encoding: 'utf8',
      env: { ...process.env, FORMAT_DATE_MODULE: modulePath, TZ: timezone },
    });

    assert.equal(result.status, 0, result.stderr || `child exited with ${result.status}`);
    assert.deepEqual(JSON.parse(result.stdout), {
      example: 'June 6, 2025',
      boundary: 'December 31, 2024',
      localMonth,
    });
  });
}
