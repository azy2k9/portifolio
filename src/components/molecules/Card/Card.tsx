import React from 'react';
import { Heading, Typography } from '../../atoms';
import {
  CardContainer,
  HeaderContainer,
  CardContentText,
  CardContent,
} from './Card.styled';
import Tags from '../../atoms/Tags';

const Card: React.FC<Card> = ({
  isSkillCard,
  isProjectCard,
  heading,
  illustration,
  children,
  button,
  tags,
}: Card) => {
  if (isProjectCard) {
    return (
      <CardContainer illustration={illustration} isProjectCard>
        <HeaderContainer>
          <Heading variant="white">{heading}</Heading>
          <Tags tags={tags} />
        </HeaderContainer>
        <CardContent>{children}</CardContent>
      </CardContainer>
    );
  }

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
