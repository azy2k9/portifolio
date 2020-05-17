import React from 'react';
import styled from 'styled-components';
import HeroIcon from '../../../assets/icons/Hero';
import LogoAlternate from '../../../assets/illustrations/LogoAlternate';
import { Heading, Button, Typography } from '../../atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-icon {
    width: 500px;
    height: 500px;

    @media ${({ theme }) => theme.mediaQueries.mobile} {
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

  @media ${({ theme }) => theme.mediaQueries.mobile} {
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

const CustomTypographyContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    width: 250px;
  }
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroIcon />
      <HeroInfoContainer>
        <LogoAlternate />
        <TextContainer>
          <Heading>Arslaan Qadus</Heading>
          <br />
          <Heading>Front End Developer</Heading>
          <br />
          <CustomTypographyContainer>
            <Typography headingColor>
              Living in Manchester and Working @{' '}
              <Link href="https://www.connexone.co.uk">ConnexOne</Link>
            </Typography>
          </CustomTypographyContainer>
          <Button
            handleClick={() => {
              console.log('hello');
            }}
            primary
            rounded
          >
            Hire Me
          </Button>
        </TextContainer>
      </HeroInfoContainer>
    </Container>
  );
};

export default Hero;