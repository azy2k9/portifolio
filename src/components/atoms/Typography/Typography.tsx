import React from 'react';
import styled from 'styled-components';

const TypographyContainer = styled.span<Typography>`
  font-weight: ${({ headingSize, theme }) =>
    headingSize && theme.font.fontWeight.bold};
  font-size: ${({ headingSize, theme }) =>
    headingSize && `${theme.font.fontSize.large}px`};
  color: ${({ headingColor, theme }) => headingColor && theme.colors.headline};
  letter-spacing: 0.05rem;
`;

const Typography: React.FC<Typography> = (props: Typography) => {
  const { children } = props;
  return <TypographyContainer {...props}>{children}</TypographyContainer>;
};

export default Typography;
