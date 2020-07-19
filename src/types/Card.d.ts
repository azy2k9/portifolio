type Card = {
  isSkillCard?: boolean;
  isProjectCard?: boolean;
  heading: string;
  illustration?: React.ReactComponentElement;
  children: string | React.ReactNode;
  button?: React.ReactComponentElement;
  tags?: Tags;
};
