import { appName } from '../common/config';
import { openModal } from '../store/modalsSlice';
import { ModalName } from '../types/modals/modalSpace';
import type { Dispatch } from '../store/store';
import type { ConfirmModalProps } from '../types/modals/confirmModal';

export const getTitle = (pageName: string) => `${pageName} - ${appName}`;

export const formatMoney = (money: number) => {
  const formattedMoney = new Intl.NumberFormat().format(money);
  return `${formattedMoney} $`;
};

export const openConfirmModal = (props: ConfirmModalProps, dispatch: Dispatch) => {
  dispatch(openModal({ name: ModalName.confirmModal, props: props }));
};
