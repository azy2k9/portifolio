import React from 'react';
import styled from 'styled-components';
import HeroIcon from '../../assets/icons/Hero';
import LogoAlternate from '../../assets/icons/LogoAlternate';

const Container = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 500px;
    height: 500px;
    z-index: -2;
  }
  flex-direction: column;
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroIcon />
      <LogoAlternate />
    </Container>
  );
};

export default Hero;
