import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UncontrolledInput } from '../../src/components/UncontrolledInput';
import { it, describe, expect, vi } from 'vitest';
import React from 'react';

describe('UncontrolledInput', () => {
  it('renders the input with the correct type', () => {
    render(<UncontrolledInput type="text" inputRef={React.createRef()} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the label when provided', () => {
    render(
      <UncontrolledInput
        type="text"
        inputRef={React.createRef()}
        label="Test Label"
      />,
    );
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('sets the default value correctly', () => {
    render(
      <UncontrolledInput
        type="number"
        inputRef={React.createRef()}
        defaultValue={10}
      />,
    );
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toHaveValue(10);
  });

  it('calls onBlur when the input loses focus', () => {
    const handleBlur = vi.fn();
    render(
      <UncontrolledInput
        type="text"
        inputRef={React.createRef()}
        onBlur={handleBlur}
      />,
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.blur(inputElement);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
