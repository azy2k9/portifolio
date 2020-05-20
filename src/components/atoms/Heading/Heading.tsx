import React from 'react';
import Typography from '../Typography';

interface Props {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }: Props) => {
  return (
    <Typography size="large" variant="heading" weight="bold">
      {children}
    </Typography>
  );
};

export default Heading;
