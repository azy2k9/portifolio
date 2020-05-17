import React from 'react';
import styled, { keyframes } from 'styled-components';
import HomeIcon from '../../assets/icons/Home';

// Create the keyframes
const slideDown = keyframes`
  to {
    transform: translateY(0%);
  }
`;

const Container = styled.div<Props>`
  animation: ${slideDown} 0.3s ease forwards;
  display: flex;
  color: ${({ theme }) => theme.colors.headline};
  width: 300px;
  justify-content: space-evenly;
  padding-right: 12px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    padding-right: 0px;
    svg,
    span {
      padding: 8px;
    }
    background-color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 8px;
    transform: translateY(-100%);
    z-index: 0;
    position: relative;
    color: ${({ theme }) => theme.colors.headline};

    svg {
      height: 48px;
      width: 48px;
    }
  }
`;

interface Props {
  isOpen?: boolean;
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <Container {...props}>
      <HomeIcon />
      <span>About</span>
      <span>Portfolio</span>
      <span>Contact</span>
    </Container>
  );
};

export default Navbar;
