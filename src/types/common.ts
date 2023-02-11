export type Action = {
  title: string;
  isTooltipOpen?: boolean;
  icon: React.ReactNode;
  clickHandler?: () => unknown;
};
