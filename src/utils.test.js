// utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils tests', () => {
  // Test for getFullYear
  test('getFullYear returns the correct year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  // Test for getFooterCopy
  test('getFooterCopy returns the correct string when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns the correct string when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // Test for getLatestNotification
  test('getLatestNotification returns the correct notification string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
