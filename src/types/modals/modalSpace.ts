import type { FunctionComponent } from 'react';
import type { ConfirmModalProps } from './confirmModal';
import type { AddBusinessModalProps } from './addBusinessModal';

export type DialogComponent<Props = Record<string, never>> = FunctionComponent<Props & { removeModal: () => void }>;

export enum ModalName {
  confirmModal = 'confirmModal',
  addBusinessModal = 'addBusinessModal'
}

export type ModalPropsMap = {
  [ModalName.confirmModal]: ConfirmModalProps;
  [ModalName.addBusinessModal]: AddBusinessModalProps;
};

export type Modal = {
  [name in ModalName]: {
    name: name;
    props: ModalPropsMap[name];
  };
}[ModalName];

export type ModalWithId = { id: string; modal: Modal };
