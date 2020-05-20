import React from 'react';
import Typography from '../Typography';
import { StyledHeading } from './Heading.styled';

interface Props {
  color1?: string;
  color2?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  variant?: string;
}

const Heading: React.FC<Props> = ({
  children,
  color1,
  color2,
  fullWidth,
  variant,
}: Props) => {
  return (
    <>
      <Typography size="large" variant={variant || 'heading'} weight="bold">
        {children}
      </Typography>
      <StyledHeading color1={color1} color2={color2} fullWidth={fullWidth} />
    </>
  );
};

export default Heading;
