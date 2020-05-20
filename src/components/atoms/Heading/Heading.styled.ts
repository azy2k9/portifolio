import styled from 'styled-components';

interface Props {
  color1?: string;
  color2?: string;
  fullWidth?: boolean;
}

export const StyledHeading = styled.linearGradient`
  background: ${({ color1, color2 }: Props) =>
    `linear-gradient(185.55deg, ${color1} 0%, ${color2} 100%)`};
  width: ${({ fullWidth }) => (fullWidth ? '70%' : '20%')};
  height: 8px;
  border-radius: 24px;
`;
