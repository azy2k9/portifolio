import * as React from 'react';
import Typography from './Typography';

export default {
  title: 'Typography',
  parameters: {
    info: { inline: true },
  },
};

export const UltraLight = () => (
  <Typography weight="ultralight">This is the typography element</Typography>
);

export const Light = () => (
  <Typography weight="light">This is the typography element</Typography>
);

export const Regular = () => (
  <Typography>This is the typography element</Typography>
);

export const Bold = () => (
  <Typography weight="bold">This is the typography element</Typography>
);

export const UltraBold = () => (
  <Typography weight="ultrabold">This is the typography element</Typography>
);

export const Smallest = () => (
  <Typography size="smallest">This is the typography element</Typography>
);

export const Small = () => (
  <Typography size="small">This is the typography element</Typography>
);

export const Base = () => (
  <Typography>This is the typography element</Typography>
);

export const Large = () => (
  <Typography size="large">This is the typography element</Typography>
);

export const Largest = () => (
  <Typography size="largest">This is the typography element</Typography>
);

export const Primary = () => (
  <Typography variant="primary">This is the typography element</Typography>
);

export const Secondary = () => (
  <Typography variant="secondary">This is the typography element</Typography>
);

export const Paragraph = () => (
  <Typography variant="paragraph">This is the typography element</Typography>
);

export const Success = () => (
  <Typography variant="success">This is the typography element</Typography>
);

export const Warning = () => (
  <Typography variant="warning">This is the typography element</Typography>
);

export const Error = () => (
  <Typography variant="error">This is the typography element</Typography>
);

export const Accent = () => (
  <Typography variant="accent">This is the typography element</Typography>
);

export const Headline = () => (
  <Typography variant="headline">This is the typography element</Typography>
);

export const Black = () => (
  <Typography variant="black">This is the typography element</Typography>
);

export const White = () => (
  <Typography variant="white">This is the typography element</Typography>
);
