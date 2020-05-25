import React from 'react';
import { Heading, Typography } from '../../atoms';
import {
  CardContainer,
  HeaderContainer,
  CardContentText,
  CardContent,
} from './Card.styled';

const Card: React.FC<Card> = ({
  isSkillCard,
  heading,
  illustration,
  children,
  button,
}: Card) => {
  if (isSkillCard) {
    return (
      <CardContainer illustration={illustration}>
        <HeaderContainer>
          <Heading variant="white">{heading}</Heading>
        </HeaderContainer>
        <CardContent>{children}</CardContent>
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <HeaderContainer>
        <Heading>{heading}</Heading>
      </HeaderContainer>
      <CardContent>
        {illustration}
        <CardContentText>
          <Typography>{children}</Typography>
        </CardContentText>
        {button}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
