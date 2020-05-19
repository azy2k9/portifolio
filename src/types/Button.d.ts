type Button = {
  handleClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  variant?: string;
  borderRadius?: string;
  icon?: boolean;
};
