import { appName } from '../common/config';

export const getTitle = (pageName: string) => `${pageName} - ${appName}`;

export const formatMoney = (money: number) => {
  const formattedMoney = new Intl.NumberFormat().format(money);
  return `${formattedMoney} $`;
};
