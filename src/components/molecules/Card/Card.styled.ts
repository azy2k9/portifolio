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
  height: 100%;
  background: ${(props: Props) => renderBackgroud(props)};
  background-size: ${({ illustration }: Props) => illustration && 'cover'};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 75px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    align-items: center;
    justify-content: space-around;
    padding: 35px 0px;
    background-size: 120rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 300px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const CardContentText = styled.div`
  width: 80%;
`;
