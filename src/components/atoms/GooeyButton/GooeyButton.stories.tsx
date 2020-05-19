import * as React from 'react';
import { action } from '@storybook/addon-actions';
import GooeyButton from './GooeyButton';

export default {
  title: 'GooeyButtons',
  parameters: {
    info: { inline: true },
  },
};

export const Primary = () => (
  <GooeyButton handleClick={action('clicked')}>
    Hello
  </GooeyButton>
);

export const Rounded = () => (
  <GooeyButton borderRadius="rounded" handleClick={action('clicked')}>
    Hello
  </GooeyButton>
);
