import React from 'react';
import styled from 'styled-components';
import { Heading, Typography } from '../../atoms';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  .hero-icon {
    height: 500px;
    width: 500px;

    @media ${({ theme }) => theme.mediaQueries.mobile} {
      height: 350px;
      width: 350px;
    }
  }
`;

const HeroInfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding-left: 3.5rem;
  }
`;

const TextContainer = styled.div`
  padding-top: 2rem;
`;

const CustomTypographyContainer = styled.div`
  padding-bottom: 24px;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    width: 250px;
  }
`;

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
`;

const Hero: React.FC<Hero> = ({
  heading,
  subHeading,
  heroImage,
  description,
  heroLogo,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}: Hero) => {
  const descriptionToRender =
    typeof description === 'string' ? (
      <Typography>{description}</Typography>
    ) : (
      description
    );

  return (
    <Container>
      {heroImage}
      <HeroInfoContainer>
        {heroLogo}
        <TextContainer>
          <Heading>{heading}</Heading>
          <br />
          <Heading>{subHeading}</Heading>
          <br />
          <CustomTypographyContainer>
            {descriptionToRender}
          </CustomTypographyContainer>
          <ButtonsContainer>
            {primaryButton}
            {secondaryButton}
            {tertiaryButton}
          </ButtonsContainer>
        </TextContainer>
      </HeroInfoContainer>
    </Container>
  );
};

export default Hero;
