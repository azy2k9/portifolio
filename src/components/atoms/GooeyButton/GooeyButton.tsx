import React from 'react';
import styled, { keyframes, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

const SlowMoTopLeft1 = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  10% {
    transform: translate(0, 0) scale(1.2) rotate(-45deg);
  }

  60% {
    opacity: 1;
    transform: translate(-18px, -16px) rotate(-45deg) scale(1, 1.2);
  }

  70% {
    transform: translate(-38px, -36px) rotate(-45deg) scale(1, 0.6);
  }

  100% {
    opacity: 0;
    transform: translate(-58px, -56px) rotate(-45deg) scale(1, 0.9);
  }
`;

const SlowMoTopLeft2 = keyframes`
  0% {
    opacity: 1;
    transform: translate(-20px, 0) scale(0);
  }

  100% {
    opacity: 0;
    transform: translate(-64px, 10px) scale(-0.2);
  }
`;

const SlowMoTopLeft3 = keyframes`
  0% {
    opacity: 1;
    transform: translate(-12px, -20px) scale(0);
  }

  100% {
    opacity: 0;
    transform: translate(14px, -30px) scale(-0.2);
  }
`;

const SlowMoBottomRight1 = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  10% {
    transform: translate(0, 0) scale(1.2) rotate(-45deg);
  }

  60% {
    opacity: 1;
    transform: translate(18px, 16px) rotate(-45deg) scale(1, 1.2);
  }

  70% {
    transform: translate(38px, 36px) rotate(-45deg) scale(1, 0.6);
  }

  100% {
    opacity: 0;
    transform: translate(42px, 42px) rotate(-45deg) scale(1, 0.6);
  }
`;

const SlowMoBottomRight2 = keyframes`
  0% {
    opacity: 1;
    transform: translate(20px, 0) scale(0);
  }

  100% {
    opacity: 0;
    transform: translate(64px, 10px) scale(-0.2);
  }
`;

const SlowMoBottomRight3 = keyframes`
  0% {
    opacity: 1;
    transform: translate(12px, 20px) scale(0);
  }

  100% {
    opacity: 0;
    transform: translate(-24px, 40px) scale(-0.2);
  }
`;

const EffectContainer = styled.span`
  display: block;
  filter: url("#goo");
  height: 400%;
  left: -50%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -150%;
  transition: all 0.1s ease-out, opacity 0.1s ease;
  width: 200%;
  z-index: 1;
`;

const CircleTopLeft1 = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  height: 25px;
  left: 27%;
  position: absolute;
  top: 40%;
  width: 25px;
`;

const CircleTopLeft2 = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  height: 25px;
  left: 27%;
  position: absolute;
  top: 40%;
  width: 25px;
`;

const CircleTopLeft3 = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  height: 25px;
  left: 27%;
  position: absolute;
  top: 40%;
  width: 25px;
`;

const CircleBottomRight1 = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  bottom: 40%;
  height: 25px;
  position: absolute;
  right: 27%;
  width: 25px;
`;

const CircleBottomRight2 = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  bottom: 40%;
  height: 25px;
  position: absolute;
  right: 27%;
  width: 25px;
`;

const CircleBottomRight3 = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  bottom: 40%;
  height: 25px;
  position: absolute;
  right: 27%;
  width: 25px;
`;

const EffectButton = styled.span<{ borderRadius?: string }>`
  background-color: ${({ theme }) => theme.colors.accent};
  border: 0;
  border-radius:
    ${({ borderRadius }) =>
    borderRadius === 'rounded' && '9999px'};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  height: 25%;
  left: 25%;
  letter-spacing: 0.1rem;
  outline: none;
  padding: 8px 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.3s ease, opacity 0.3s ease;
  width: 50%;
  z-index: -1;
`;

const Goo = styled.svg`
  height: 1px;
  position: absolute;
  visibility: hidden;
  width: 1px;
`;

const ButtonContainer = styled.span`
  display: flex;
  z-index: 2;
`;

interface Styles {
  variant?: string;
  theme: DefaultTheme;
  borderRadius?: string;
  children?: React.ReactNode;
}

const variantColor = ({ variant, theme }: Styles) => {
  let variantBackgroundColour = theme.colors.primary;
  const variantTextColor = theme.colors.white;
  switch (variant) {
    case 'primary':
      variantBackgroundColour = theme.colors.primary;
      break;
    case 'secondary':
      variantBackgroundColour = theme.colors.secondary;
      break;
    case 'success':
      variantBackgroundColour = theme.colors.success;
      break;
    case 'error':
      variantBackgroundColour = theme.colors.error;
      break;
    case 'warning':
      variantBackgroundColour = theme.colors.warning;
      break;
    default:
      variantBackgroundColour = theme.colors.primary;
  }
  return [variantBackgroundColour, variantTextColor];
};

const CAButton = styled.button<Button>`
  background-color: ${(props: Styles) => variantColor(props)[0]};
  border: 0;
  border-radius:
    ${({ borderRadius, children }: Styles) =>
    borderRadius === 'rounded' && children && '9999px'};
  box-shadow: 0 2px 8px -1px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  color: ${(props: Styles) => variantColor(props)[1]};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  letter-spacing: 0.1rem;
  outline: none;
  padding: 8px 30px;
  position: relative;
  transition:
    box-shadow 0.1s ease,
    background 0.3s ease,
    transform 0.1s ease,
    opacity 0.3s ease;
  z-index: 2;

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border: 0;
    box-shadow: 0 4px 20px -2px ${({ theme }) => rgba(theme.colors.accent, 0.5)};
    transform: scale(1.05);
  }

  :hover > ${EffectContainer} {
    opacity: 1;
  }

  :hover > ${EffectContainer} > ${CircleTopLeft1} {
    animation: ${SlowMoTopLeft1} 2s cubic-bezier(0.73, 0.01, 0.09, 0.7) forwards;
  }

  :hover > ${EffectContainer} > ${CircleTopLeft2} {
    animation: ${SlowMoTopLeft2} 0.6s 1.2s ease-out forwards;
  }

  :hover > ${EffectContainer} > ${CircleTopLeft3} {
    animation: ${SlowMoTopLeft3} 0.6s 1.2s ease-out forwards;
  }

  :hover > ${EffectContainer} > ${CircleBottomRight1} {
    animation: ${SlowMoBottomRight1} 2s cubic-bezier(0.73, 0.01, 0.09, 0.7) forwards;
  }

  :hover > ${EffectContainer} > ${CircleBottomRight2} {
    animation: ${SlowMoBottomRight2} 0.6s 1.2s ease-out forwards;
  }

  :hover > ${EffectContainer} > ${CircleBottomRight3} {
    animation: ${SlowMoBottomRight3} 0.6s 1.2s ease-out forwards;
  }

  :hover + ${EffectContainer} {
    background-color: ${({ theme }) => rgba(theme.colors.accent, 0.5)};
  }

  :hover + ${EffectContainer} {
    background-color: ${({ theme }) => rgba(theme.colors.accent, 0.5)};
    transform: scale(0.95);
  }

  :active {
    transform: scale(0.95);
  }
`;

const GooeyButton: React.FC<Button> = (props: Button) => {
  const { handleClick, children, borderRadius } = props;

  return (
    <>
      <Goo xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </Goo>

      <CAButton onClick={handleClick} type="button" {...props}>
        <ButtonContainer>{children}</ButtonContainer>
        <EffectContainer>
          <CircleTopLeft1 />
          <CircleTopLeft2 />
          <CircleTopLeft3 />
          <EffectButton borderRadius={borderRadius} />
          <CircleBottomRight1 />
          <CircleBottomRight2 />
          <CircleBottomRight3 />
        </EffectContainer>
      </CAButton>
    </>
  );
};

export default GooeyButton;
