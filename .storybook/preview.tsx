import { defaultTheme, Provider } from '@adobe/react-spectrum';
import type { Preview } from "@storybook/react";
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      return (
        <Provider theme={defaultTheme}>
          <Story />
        </Provider>
      )
    }
  ]
};

export default preview;
