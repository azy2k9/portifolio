import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../assets/icons/Home';

const Container = styled.div<Props>`
  display: flex;
  color: ${({ theme }) => theme.colors.headline};
  width: 300px;
  justify-content: space-evenly;
  padding-right: 12px;

  @media (max-width: 768px) {
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
    z-index: -1;
    position: absolute;
    transform: ${({ isOpen }) => isOpen && 'translateY(0%)'};
    transition: transform 0.5s ease-in-out;
    color:  ${({ theme }) => theme.colors.headline};

    svg {
      width: 100px;
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
