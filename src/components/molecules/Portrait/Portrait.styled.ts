import styled from 'styled-components';
import { animated } from 'react-spring';

export const PortraitContainer = styled(animated.div)`
  height: 600px;
  position: relative;
  width: 512px;
`;

export const TriangleBlue = styled(animated.div)`
  bottom: 23.13%;
  left: 88.69%;
  position: absolute;
  right: -4%;
  opacity: 0.5;
  top: 65%;
  filter: drop-shadow(9px 9px 7px rgba(160, 226, 247, 0.33));
`;

export const TriangleYellow = styled(animated.div)`
  bottom: 3.16%;
  left: 23.59%;
  position: absolute;
  right: 63%;
  top: 87.85%;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.34));
`;

export const RectangleBlue = styled(animated.div)`
  bottom: 89.52%;
  left: 46%;
  opacity: 0.8;
  position: absolute;
  right: 38%;
  top: 0%;
  filter: drop-shadow(9px 9px 7px rgba(160, 226, 247, 0.33));
`;

export const RectanglePurple = styled(animated.div)`
  border-radius: 6px;
  bottom: 0%;
  left: 62%;
  opacity: 0.4;
  position: absolute;
  top: 82%;
  filter: drop-shadow(4px 4px 7px rgba(171, 86, 146, 0.2));
`;

export const SquareYellow = styled(animated.div)`
  bottom: 30.46%;
  left: -2%;
  position: absolute;
  right: 83.06%;
  top: 61.06%;
  filter: drop-shadow(4px 4px 7px rgba(251, 219, 176, 0.4));
`;

export const SquareBlue = styled(animated.div)`
  border-radius: 6px;
  bottom: 64.06%;
  left: 52%;
  opacity: 0.5;
  position: absolute;
  top: 65%;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.34));
`;

export const BGWhite = styled(animated.div)`
  background-color: #fff;
  border-radius: 6px;
  bottom: 14%;
  box-shadow: 3px 16px 38px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 7%;
  position: absolute;
  right: 17%;
  top: 5%;

  > svg {
    height: 84%;
    width: 100%;
  }
`;

export const ElipseBlue = styled(animated.div)`
  bottom: 10%;
  left: 20%;
  opacity: 0.3;
  position: absolute;
  top: 84%;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.34));
`;

export const ElipsePurple = styled(animated.div)`
  bottom: 91%;
  left: 12%;
  opacity: 0.5;
  position: absolute;
  right: 79%;
  top: 2%;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.34));
`;

export const PolygonGreen = styled(animated.div)`
  border-radius: 6px;
  bottom: 64%;
  left: 77%;
  opacity: 0.63;
  position: absolute;
  right: 2%;
  top: 19%;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.34));
`;

export const BGGradient = styled(animated.div)`
  border-radius: 6px;
  bottom: 5%;
  left: 12%;
  position: absolute;
  right: 8%;
  top: 11%;
  filter: drop-shadow(4px 4px 16px rgba(62, 166, 248, 0.64));
  > svg {
    width: 100%;
    height: 100%;
  }
`;
