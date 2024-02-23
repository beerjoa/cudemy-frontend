import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '#store/index.ts';

import RootLayout from './RootLayout.tsx';
import { MemoryRouter } from 'react-router-dom';

describe('RootLayout', () => {
  it('renders navigation, main and footer', () => {
    // Arrange
    render(
      <Provider store={store}>
        <MemoryRouter>
          <RootLayout />
        </MemoryRouter>
      </Provider>,
    );
    // Act

    // Expect
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('footer')).toBeInTheDocument();
  });
});
