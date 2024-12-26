import { describe, it, expect } from 'vitest';
import { cn } from '../../src/lib/helper/cn';

describe('cn', () => {
  it('combines multiple class names into a single string', () => {
    const result = cn('bg-red-500', 'text-white', 'p-4');
    expect(result).toBe('bg-red-500 text-white p-4');
  });

  it('handles undefined or falsy values gracefully', () => {
    const result = cn('bg-red-500', undefined, '', 'text-white');
    expect(result).toBe('bg-red-500 text-white');
  });

  it('merges conflicting Tailwind classes correctly', () => {
    const result = cn('bg-red-500', 'bg-blue-500', 'text-white');
    expect(result).toBe('bg-blue-500 text-white'); // `twMerge` keeps the last conflicting class
  });

  it('removes duplicate classes', () => {
    const result = cn('bg-red-500', 'bg-red-500', 'text-white', 'text-white');
    expect(result).toBe('bg-red-500 text-white');
  });

  it('handles empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('merges arbitrary class lists with Tailwind class rules', () => {
    const result = cn(
      'p-4',
      'p-2',
      'bg-red-500',
      'hover:bg-blue-500',
      'text-lg',
    );
    expect(result).toBe('p-2 bg-red-500 hover:bg-blue-500 text-lg'); // `p-2` overwrites `p-4`
  });

  it('handles dynamic inputs properly', () => {
    const dynamicClass = 'text-blue-500';
    const result = cn('bg-red-500', dynamicClass, undefined);
    expect(result).toBe('bg-red-500 text-blue-500');
  });
});
