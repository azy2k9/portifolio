import React from 'react';
import Card from './Card';
import Frontend from '../../../assets/illustrations/Frontend';
import { Button } from '../../atoms';
import Backend from '../../../assets/illustrations/Backend';

export default {
  title: 'Cards',
  parameters: {
    info: { inline: true },
  },
};

export const FrontendCard = () => (
  <Card
    heading="Front End Development"
    illustration={<Frontend />}
    description="Through constant development and refinement sessions with clients and stakeholders, I am able to convey the 
    clients vision into reality."
    button={<Button borderRadius="rounded">More Info</Button>}
  />
);

export const BackendCard = () => (
  <Card
    heading="Back End Development"
    illustration={<Backend />}
    description="Through constant development and refinement sessions with clients and stakeholders, I am able to convey the 
    clients vision into reality."
    button={<Button borderRadius="rounded">More Info</Button>}
  />
);
