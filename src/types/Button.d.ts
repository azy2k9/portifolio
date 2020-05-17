type Button = {
  handleClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  primary?: boolean;
  rounded?: boolean;
  icon?: boolean;
};
