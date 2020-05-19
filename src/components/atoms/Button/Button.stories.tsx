import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import Twitter from '../../../assets/icons/Social/Twitter';

export default {
  title: 'Buttons',
  parameters: {
    info: { inline: true },
  },
};

export const Primary = () => (
  <Button variant="primary" handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Success = () => (
  <Button variant="success" handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Warning = () => (
  <Button variant="warning" handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Error = () => (
  <Button variant="error" handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Rounded = () => (
  <Button borderRadius="rounded" handleClick={action('clicked')}>
    Hello
  </Button>
);

export const Link = () => (
  <Button borderRadius="rounded" href="https://twitter.com">
    Go to twitter
  </Button>
);

export const IconButton = () => (
  <Button borderRadius="rounded" href="https://twitter.com">
    <Twitter />
  </Button>
);
