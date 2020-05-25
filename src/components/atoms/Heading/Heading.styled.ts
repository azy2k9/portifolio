import styled from 'styled-components';

interface Props {
  color1?: string;
  color2?: string;
  fullWidth?: boolean;
}

export const StyledHeading = styled.linearGradient`
  /* stylelint-disable */
  /* prettier-ignore-start */
  background-image: ${({ color1, color2 }: Props) =>
    // eslint-disable-next-line @typescript-eslint/indent
    `linear-gradient(185.55deg, ${color1} 0%, ${color2} 100%)`};
  /* prettier-ignore-end */
  /* stylelint-enable */
  border-radius: 24px;
  height: 8px;
  width: ${({ fullWidth }) => (fullWidth ? '70%' : '20%')};
`;
