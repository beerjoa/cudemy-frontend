import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '#store/index.ts';

import AppLayout from './AppLayout.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('AppLayout', () => {
  it('Renders AppLayout', () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </Provider>,
    );
    // Act

    // Expect
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('footer')).toBeInTheDocument();
  });
});
