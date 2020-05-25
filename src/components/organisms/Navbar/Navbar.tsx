import React from 'react';
import styled, { keyframes } from 'styled-components';
import HomeIcon from '../../../assets/icons/Home';

// Create the keyframes
const slideDown = keyframes`
  to {
    transform: translateY(0%);
  }
`;

const Container = styled.div<Props>`
  animation: ${slideDown} 0.3s ease forwards;
  color: ${({ theme }) => theme.colors.headline};
  display: flex;
  justify-content: space-evenly;
  padding-right: 12px;
  width: 300px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.headline};
    flex-direction: column;
    height: 100%;
    padding-bottom: 8px;
    padding-right: 0;
    position: relative;
    transform: translateY(-100%);
    width: 100vw;
    z-index: 0;

    svg,
    span {
      padding: 8px;
    }

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
