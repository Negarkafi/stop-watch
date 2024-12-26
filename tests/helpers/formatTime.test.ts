import { describe, it, expect } from 'vitest';
import { formatTime } from '../../src/lib/helper/formatTime';

describe('formatTime', () => {
  it('formats time correctly for 0 seconds', () => {
    expect(formatTime(0)).toBe('00 : 00 : 00');
  });

  it('formats time correctly for seconds less than a minute', () => {
    expect(formatTime(5)).toBe('00 : 00 : 05');
    expect(formatTime(59)).toBe('00 : 00 : 59');
  });

  it('formats time correctly for minutes and seconds', () => {
    expect(formatTime(60)).toBe('00 : 01 : 00');
    expect(formatTime(125)).toBe('00 : 02 : 05');
  });

  it('formats time correctly for hours, minutes, and seconds', () => {
    expect(formatTime(3600)).toBe('01 : 00 : 00');
    expect(formatTime(3661)).toBe('01 : 01 : 01');
    expect(formatTime(86399)).toBe('23 : 59 : 59');
  });

  it('handles large input values correctly', () => {
    expect(formatTime(86400)).toBe('24 : 00 : 00'); // 24 hours
    expect(formatTime(90061)).toBe('25 : 01 : 01'); // 25 hours, 1 minute, 1 second
  });

  it('pads single-digit numbers with leading zeros', () => {
    expect(formatTime(7)).toBe('00 : 00 : 07');
    expect(formatTime(61)).toBe('00 : 01 : 01');
    expect(formatTime(3601)).toBe('01 : 00 : 01');
  });
});
