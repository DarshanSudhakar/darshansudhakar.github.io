import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, cleanup, fireEvent } from '@testing-library/react';

import { HeroCard, CodeCard } from '../HeroCard';
import { themelight } from '../../Layout/theme';

afterEach(cleanup);

test('HeroCard renders correctly', () => {
  let { getByText, debug } = render(
    <ThemeProvider theme={themelight}>
      <CodeCard />
    </ThemeProvider>
  );

  // debug();

  fireEvent.click(getByText(/DateTime.Now.Year - 1989;/i));

  let age = `${new Date().getFullYear() - 1989};`;
  let rgx = new RegExp(`${age}`);
  getByText(rgx);
});
