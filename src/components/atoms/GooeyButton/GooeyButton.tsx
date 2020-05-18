import React, { Props } from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const SlowMoTopLeft1 = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  10% {
    transform: translate(0, 0) scale(1.2) rotate(-45deg);
  }
  60% {
    transform: translate(-18px, -16px) rotate(-45deg) scale(1, 1.2);
    opacity: 1;
  }
  70% {
    transform: translate(-38px, -36px) rotate(-45deg) scale(1, 0.6);
  }
  100% {
    transform: translate(-58px, -56px) rotate(-45deg) scale(1, 0.9);
    opacity: 0;
  }
`;

const SlowMoTopLeft2 = keyframes`
  0% {
    transform: translate(-20px, 0px) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-64px, 10px) scale(-0.2);
    opacity: 0;
  }
`;

const SlowMoTopLeft3 = keyframes`
  0% {
    transform: translate(-12px, -20px) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(14px, -30px) scale(-0.2);
    opacity: 0;
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
    transform: translate(18px, 16px) rotate(-45deg) scale(1, 1.2);
    opacity: 1;
  }
  70% {
    transform: translate(38px, 36px) rotate(-45deg) scale(1, 0.6);
  }
  100% {
    transform: translate(42px, 42px) rotate(-45deg) scale(1, 0.6);
    opacity: 0;
  }
`;

const SlowMoBottomRight2 = keyframes`
  0% {
    transform: translate(20px, 0px) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(64px, 10px) scale(-0.2);
    opacity: 0;
  }
`;

const SlowMoBottomRight3 = keyframes`
  0% {
    transform: translate(12px, 20px) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-24px, 40px) scale(-0.2);
    opacity: 0;
  }
`;

const EffectContainer = styled.span`
  position: absolute;
  display: block;
  width: 200%;
  height: 400%;
  top: -150%;
  left: -50%;
  opacity: 0;
  filter: url("#goo");
  transition: all 0.1s ease-out, opacity 0.1s ease;
  pointer-events: none;
  z-index: 1;
`;

const CircleTopLeft1 = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  top: 40%;
  left: 27%;
`;

const CircleTopLeft2 = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  top: 40%;
  left: 27%;
`;

const CircleTopLeft3 = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  top: 40%;
  left: 27%;
`;

const CircleBottomRight1 = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  bottom: 40%;
  right: 27%;
`;

const CircleBottomRight2 = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  bottom: 40%;
  right: 27%;
`;

const CircleBottomRight3 = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accent};
  bottom: 40%;
  right: 27%;
`;

const EffectButton = styled.span<Props>`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: ${({ rounded }) => rounded && '9999px'};
  cursor: pointer;
  letter-spacing: 0.1rem;
  padding: 8px 30px;
  outline: none;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  position: absolute;
  width: 50%;
  height: 25%;
  top: 50%;
  left: 25%;
  z-index: 1;
  transform: translateY(-50%);
  transition: background 0.3s ease, opacity 0.3s ease;
`;

const Goo = styled.svg`
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
`;

const ButtonContainer = styled.span`
  display: flex;
  z-index: 2;
`;

const CAButton = styled.button<Button>`
  background-color: ${({ primary, theme }) => primary && theme.colors.primary};
  color: ${({ primary, theme }) => primary && theme.colors.white};
  border: 0;
  box-shadow: 0 2px 8px -1px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  border-radius: ${({ rounded, children }) => rounded && children && '9999px'};
  cursor: pointer;
  letter-spacing: 0.1rem;
  padding: 8px 30px;
  position: relative;
  outline: none;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  transition: box-shadow 0.1s ease, background 0.3s ease, transform 0.1s ease, opacity 0.3s ease;
  z-index: 2;

  :hover {
    border: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 4px 20px -2px ${({ theme }) => rgba(theme.colors.accent, 0.5)};
    transform: scale(1.05);
  }

  :hover > ${EffectContainer} {
    opacity: 1
  }

  :hover > ${EffectContainer} > ${CircleTopLeft1} {
    animation: ${SlowMoTopLeft1} 2s cubic-bezier(.73,.01,.09,.7) forwards ;
  }

  :hover > ${EffectContainer} > ${CircleTopLeft2} {
    animation: ${SlowMoTopLeft2} 0.6s 1.2s ease-out forwards;
  }

  :hover > ${EffectContainer} > ${CircleTopLeft3} {
    animation: ${SlowMoTopLeft3} 0.6s 1.2s ease-out forwards;
  }

  :hover > ${EffectContainer} > ${CircleBottomRight1} {
    animation: ${SlowMoBottomRight1} 2s cubic-bezier(.73,.01,.09,.7) forwards ;
  }

  :hover > ${EffectContainer} > ${CircleBottomRight2} {
    animation: ${SlowMoBottomRight2} 0.6s 1.2s ease-out forwards;
  }

  :hover > ${EffectContainer} > ${CircleBottomRight3} {
    animation: ${SlowMoBottomRight3} 0.6s 1.2s ease-out forwards;
  }

  :hover + ${EffectContainer}, {
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
  const { handleClick, children } = props;

  return (
    <>
      <Goo xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </Goo>

      <CAButton onClick={handleClick} type="button" {...props}>
        <ButtonContainer>
          {children}
        </ButtonContainer>
        <EffectContainer>
          <CircleTopLeft1 />
          <CircleTopLeft2 />
          <CircleTopLeft3 />
          <EffectButton {...props} />
          <CircleBottomRight1 />
          <CircleBottomRight2 />
          <CircleBottomRight3 />
        </EffectContainer>
      </CAButton>
    </>
  );
};

export default GooeyButton;
