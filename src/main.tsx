import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from '#store/index.ts';

import './index.css';
import AppLayout from './AppLayout.tsx';
import Home from '#pages/Home/index.tsx';
import Discounts from '#pages/Discounts/index.tsx';
import NotFound404 from '#pages/NotFound404.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <AppLayout>
        <NotFound404 />
      </AppLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: '/discounts', element: <Discounts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
