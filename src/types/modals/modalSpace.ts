import type { FunctionComponent } from 'react';
import { ConfirmModalProps } from './confirmModal';

export type DialogComponent<Props = Record<string, never>> = FunctionComponent<Props & { removeModal: () => void }>;

export enum ModalName {
  confirmModal = 'confirmModal'
}

export type ModalPropsMap = {
  [ModalName.confirmModal]: ConfirmModalProps;
};

export type Modal = {
  [name in ModalName]: {
    id: string;
    name: name;
    props: ModalPropsMap[name];
  };
}[ModalName];
