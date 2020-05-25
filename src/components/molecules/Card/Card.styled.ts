import styled, { DefaultTheme } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';

interface Props {
  illustration?: React.ReactElement;
  theme: DefaultTheme;
}

const renderBackgroud = ({ theme, illustration }: Props) => {
  if (illustration) {
    const svgString = encodeURIComponent(renderToStaticMarkup(illustration));
    const dataUri = `url('data:image/svg+xml,${svgString}')`;
    return `${dataUri} no-repeat center`;
  }

  return theme.colors.white;
};

export const CardContainer = styled.div<Props>`
  background-color: ${(props: Props) => renderBackgroud(props)};
  background-size: ${({ illustration }: Props) => illustration && 'cover'};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 75px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    align-items: center;
    background-size: 120rem;
    justify-content: space-around;
    padding: 35px 0;
  }
`;

export const HeaderContainer = styled.div`
  width: 300px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: center;
  }
`;

export const CardContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export const CardContentText = styled.div`
  width: 80%;
`;
