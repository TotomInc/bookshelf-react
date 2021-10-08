/* eslint import/no-extraneous-dependencies: "off" */
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';

import { queryClient } from './react-query';

/**
 * Mock various providers used in the app.
 */
const Providers: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

/**
 * Render into a container which is appended to document.body. It should be used with cleanup.
 */
const customRender = (ui: React.ReactElement): ReturnType<typeof render> => render(ui, { wrapper: Providers });

export * from '@testing-library/react';
export { customRender as render };
