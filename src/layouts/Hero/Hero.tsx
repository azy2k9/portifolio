import React from 'react';
import styled from 'styled-components';
import HeroIcon from '../../assets/icons/Hero';
import LogoAlternate from '../../assets/icons/LogoAlternate';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-icon {
    width: 500px;
    height: 500px;
    z-index: -2;

    @media (max-width: 768px) {
      width: 350px;
      height: 350px;
    }
  }
`;

const HeroInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding-left: 5rem;

  @media (max-width: 768px) {
    padding-left: 3.5rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroIcon />
      <HeroInfoContainer>
        <LogoAlternate />
      </HeroInfoContainer>
    </Container>
  );
};

export default Hero;
