import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledTags } from './Tags.styled';

interface Props {
  tags: String[];
}

const Tags: React.FC<Props> = ({ tags }: Props) => {
  return (
    <>
      {tags.map((tag) => (
        <StyledTags key={uuidv4()}>{tag}</StyledTags>
      ))}
    </>
  );
};

export default Tags;
