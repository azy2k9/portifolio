import React from 'react';
import styled from 'styled-components';
import HeroIcon from '../../../assets/icons/Hero';
import { PageLayout, Hero } from '../../organisms';
import { Typography, Button } from '../../atoms';
import LogoAlternate from '../../../assets/illustrations/LogoAlternate';

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const Homepage: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        heroImage={<HeroIcon />}
        heroLogo={<LogoAlternate />}
        heading="Arslaan Qadus"
        subHeading="Front End Developer"
        description={
          <Typography headingColor>
            Living in Manchester and Working @{' '}
            <Link href="https://www.connexone.co.uk">ConnexOne</Link>
          </Typography>
        }
        primaryButton={
          <Button handleClick={() => console.log('hello')} primary rounded>
            Hire Me
          </Button>
        }
      />
    </PageLayout>
  );
};

export default Homepage;
