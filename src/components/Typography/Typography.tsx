import React from 'react';
import styled from 'styled-components';

const TypographyContainer = styled.span<Props>`
    font-weight: ${({ headingSize, theme }) => headingSize && theme.font.fontWeight.bold};
    font-size: ${({ headingSize, theme }) => headingSize && `${theme.font.fontSize.large}px`};
    color: ${({ headingColor, theme }) => headingColor && theme.colors.headline};
    letter-spacing: 0.05rem;
`;

interface Props {
  headingSize?: boolean
  headingColor?: boolean
  primary?: boolean
  children: React.ReactNode
}

const Typography: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <TypographyContainer {...props}>
      {children}
    </TypographyContainer>
  );
};

export default Typography;
