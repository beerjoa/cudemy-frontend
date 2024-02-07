import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    // Arrange
    render(<App />);
    // Act

    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Udemy Discount Status');
  });
});
