import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Buttons',
  parameters: {
    info: { inline: true },
  },
};

export const Primary = () => (
  <Button primary handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Rounded = () => (
  <Button primary rounded handleClick={action('clicked')}>
    Hello
  </Button>
);
