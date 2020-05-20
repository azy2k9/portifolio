import * as React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  parameters: {
    info: { inline: true },
  },
};

export const DefaultHeading = () => (
  <Heading>
    This is a default heading
  </Heading>
);

export const HeadingWithGradient = () => (
  <Heading color1="#B5F5EC" color2="#91D5FF" variant="white">
    What Am I Offering
  </Heading>
);

export const HeadingWithFullWidthGradient = () => (
  <Heading color1="#EFDBFF" color2="#FF85C0" fullWidth>
    My Skills
  </Heading>
);
