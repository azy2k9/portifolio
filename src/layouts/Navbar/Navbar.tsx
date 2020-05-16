import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../assets/icons/Home';

const Container = styled.div<Props>`
  display: flex;
  width: 300px;
  justify-content: space-between;
  padding-right: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-right: 0px;
    * {
      padding: 8px;
    }
    background-color: ${({ theme }) => theme.colors.secondary};
    padding-bottom: 8px;
    transform: translateY(-100%);
    z-index: -1;
    position: absolute;
    transform: ${({ isOpen }) => isOpen && 'translateY(0%)'};
    transition: transform 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.white};

    svg > g > path { 
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

interface Props {
  isOpen?: boolean,
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <Container {...props}>
      <HomeIcon />
      <span>About</span>
      <span>Portifolio</span>
      <span>Contact</span>
    </Container>
  );
};

export default Navbar;