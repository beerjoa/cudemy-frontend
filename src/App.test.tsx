import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '#store/index.ts';

import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders App', () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    // Act

    // Expect
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
