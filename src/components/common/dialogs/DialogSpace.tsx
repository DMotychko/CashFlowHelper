import React, { useCallback } from 'react';
import { useDispatch, useSelector } from '../../../store/hooks';
import ConfirmDialog from './ConfirmDialog';
import { closeModal } from '../../../store/modalsSlice';
import { ModalName } from '../../../types/modals/modalSpace';
import type { DialogComponent, ModalPropsMap } from '../../../types/modals/modalSpace';

const modalsMap: { [name in ModalName]: DialogComponent<ModalPropsMap[name]> } = {
  [ModalName.confirmModal]: ConfirmDialog
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
        const Component = modalsMap[modal.name];

        return <Component key={modal.id} removeModal={() => onCloseModal(modal.id)} {...modal.props} />;
      })}
    </>
  );
};

export default DialogSpace;
