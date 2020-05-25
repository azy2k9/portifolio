type Card = {
  isSkillCard?: boolean;
  heading: string;
  illustration: React.ReactComponentElement;
  children: string | React.ReactNode;
  button?: React.ReactComponentElement;
};
