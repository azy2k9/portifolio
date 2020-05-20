import React from 'react';
import { Heading, Typography } from '../../atoms';
import {
  CardContainer,
  HeaderContainer,
  IllustrationContainer,
  AlignentContainer,
  CardContent,
  ButtonContainer,
} from './Card.styled';

const Card: React.FC<Card> = ({
  heading,
  illustration,
  description,
  button,
}: Card) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <AlignentContainer>
          <Heading>{heading}</Heading>
        </AlignentContainer>
      </HeaderContainer>
      <IllustrationContainer>{illustration}</IllustrationContainer>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <ButtonContainer>{button}</ButtonContainer>
    </CardContainer>
  );
};

export default Card;
