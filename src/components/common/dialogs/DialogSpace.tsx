import React, { useCallback } from 'react';
import { useDispatch, useSelector } from '../../../store/hooks';
import ConfirmDialog from './ConfirmDialog';
import { closeModal } from '../../../store/modalsSlice';
import { ModalName } from '../../../types/modals/modalSpace';
import type { DialogComponent, ModalPropsMap } from '../../../types/modals/modalSpace';
import AddBusinessDialog from '../../mainPage/AddBusinessDialog';

const modalsMap: { [name in ModalName]: DialogComponent<ModalPropsMap[name]> } = {
  [ModalName.confirmModal]: ConfirmDialog,
  [ModalName.addBusinessModal]: AddBusinessDialog
};

const DialogSpace: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);

  const onCloseModal = useCallback((modalId: string) => {
    dispatch(closeModal(modalId));
  }, []);

  return (
    <>
      {modals.map((modal) => {
        const { name, props } = modal.modal;
        const Component = modalsMap[name];

        return <Component key={modal.id} removeModal={() => onCloseModal(modal.id)} {...props} />;
      })}
    </>
  );
};

export default DialogSpace;
