import React from 'react';
import styled from 'styled-components';
import { Heading, Typography } from '../../atoms';

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

const CustomTypographyContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    width: 250px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
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
