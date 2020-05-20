import React from 'react';
import { TypographyContainer } from './Typography.styled';

const Typography: React.FC<Typography> = (props: Typography) => {
  const { children } = props;
  return <TypographyContainer {...props}>{children}</TypographyContainer>;
};

export default Typography;
