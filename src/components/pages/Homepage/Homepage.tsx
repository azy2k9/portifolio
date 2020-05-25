import React from 'react';
import styled from 'styled-components';
import HeroIcon from '../../../assets/icons/Hero';
import { Hero } from '../../organisms';
import { GooeyButton, Typography } from '../../atoms';
import LogoAlternate from '../../../assets/illustrations/LogoAlternate';

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const Homepage: React.FC = (props) => {
  return (
    <>
      <Hero
        heroImage={<HeroIcon />}
        heroLogo={<LogoAlternate />}
        heading="Arslaan Qadus"
        subHeading="Front End Developer"
        description={
          <Typography variant="heading">
            Living in Manchester and Working @{' '}
            <Link href="https://www.connexone.co.uk">ConnexOne</Link>
          </Typography>
        }
        primaryButton={
          <GooeyButton borderRadius="rounded">Hire Me</GooeyButton>
        }
      />
    </>
  );
};

export default Homepage;
