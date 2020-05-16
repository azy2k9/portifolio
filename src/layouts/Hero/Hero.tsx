import React from 'react';
import styled from 'styled-components';
import HeroIcon from '../../assets/icons/Hero';
import LogoAlternate from '../../assets/icons/LogoAlternate';
import Typography from '../../components/Typography';

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
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 3.5rem;
  }
`;

const TextContainer = styled.div`
  padding-top: 2rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroIcon />
      <HeroInfoContainer>
        <LogoAlternate />
        <TextContainer>
          <Typography headingSize headingColor>
            Arslaan Qadus
          </Typography>
          <br />
          <Typography headingSize headingColor>
            Front End Developer
          </Typography>
          <br />
          <Typography headingColor>
            Living in Manchester 
          </Typography>
          <br />
          <Typography headingColor>
            Working @ <Link href="https://www.connexone.co.uk">ConnexOne</Link>
          </Typography>
        </TextContainer>
      </HeroInfoContainer>
    </Container>
  );
};

export default Hero;
