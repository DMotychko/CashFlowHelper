import React, { useCallback } from 'react';
import { useDispatch, useSelector } from '../../../store/hooks';
import ConfirmDialog from './ConfirmDialog';
import AddBusinessDialog from '../../mainPage/AddBusinessDialog';
import { closeModal } from '../../../store/modalsSlice';
import { ModalName } from '../../../types/modals/modalSpace';
import type { DialogComponent, ModalPropsMap, ModalWithId } from '../../../types/modals/modalSpace';
import AddCreditDialog from '../../mainPage/AddCreditDialog';

type ModalRenderer<Name extends ModalName> = (modal: ModalWithId<Name>, onCloseModal: (id: string) => void) => JSX.Element;

const getModalRenderer =
  <Name extends ModalName>(ModalComponent: DialogComponent<ModalPropsMap[Name]>): ModalRenderer<Name> =>
  (modal, onCloseModal) => {
    const props = {
      key: modal.id,
      removeModal: () => onCloseModal(modal.id),
      ...modal.props
    };
    return <ModalComponent {...props} />;
  };

const modalRenderers: { [name in ModalName]: ModalRenderer<name> } = {
  [ModalName.confirmModal]: getModalRenderer(ConfirmDialog),
  [ModalName.addBusinessModal]: getModalRenderer(AddBusinessDialog),
  [ModalName.addCreditModal]: getModalRenderer(AddCreditDialog)
};

const DialogSpace: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);

  const onCloseModal = useCallback((modalId: string) => {
    dispatch(closeModal(modalId));
  }, []);

  return <>{modals.map((modal) => modalRenderers[modal.name](modal as never, onCloseModal))}</>;
};

export default DialogSpace;
