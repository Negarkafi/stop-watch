import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionButton } from '../../src/components/ActionButton';
import { it, describe, expect, vi } from 'vitest';

describe('ActionButton Component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(<ActionButton text="Click Me" />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    const { getByText } = render(
      <ActionButton text="Click Me" classes="custom-class" />,
    );
    expect(getByText('Click Me')).toHaveClass('custom-class');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <ActionButton text="Click Me" onClick={handleClick} />,
    );
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
