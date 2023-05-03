import React, { useCallback, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Container from '@mui/material/Container';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import IncomeSection from '../components/mainPage/IncomeSection';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddCardIcon from '@mui/icons-material/AddCard';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useDispatch } from '../store/hooks';
import { getTitle } from '../helpers/common';
import Header from '../components/mainPage/Header';
import MenuButton from '../components/mainPage/MenuButton';
import SwipableDrawer from '../components/common/SwipeableDrawer';
import { openModal } from '../store/modalsSlice';
import { ModalName } from '../types/modals/modalSpace';
import type { DrawerItem } from '../types/components/swipeableDrawer';

import '../styles/pages/mainPage.scss';

const pageName = 'Головна';

const creditActions: DrawerItem[] = [
  {
    icon: <AddCardIcon />,
    label: 'Взяти кредит в банку',
    type: 'action'
  },
  {
    key: 'divider-1',
    type: 'divider'
  },
  {
    icon: <CreditScoreIcon />,
    label: 'Повернути кредит в банку',
    type: 'action'
  }
];

type Props = {
  onExitGame: () => void;
};

const MainPage: React.FunctionComponent<Props> = ({ onExitGame }) => {
  const dispatch = useDispatch();
  const [isBusinessDrawerOpen, setIsBusinessDrawerOpen] = useState(false);
  const [isApartmentsDrawerOpen, setIsApartmentsDrawerOpen] = useState(false);
  const [isCreditDrawerOpen, setIsCreditDrawerOpen] = useState(false);

  const onBusinessDrawerClose = useCallback(() => setIsBusinessDrawerOpen(false), []);
  const onBusinessDrawerOpen = useCallback(() => setIsBusinessDrawerOpen(true), []);

  const onApartmentsDrawerClose = useCallback(() => setIsApartmentsDrawerOpen(false), []);
  const onApartmentsDrawerOpen = useCallback(() => setIsApartmentsDrawerOpen(true), []);

  const onCreditDrawerClose = useCallback(() => setIsCreditDrawerOpen(false), []);
  const onCreditDrawerOpen = useCallback(() => setIsCreditDrawerOpen(true), []);

  const businessActions = useMemo<DrawerItem[]>(
    () => [
      {
        icon: <AddBusinessIcon />,
        label: 'Додати малий бізнес',
        type: 'action',
        clickHandler: () => dispatch(openModal({ name: ModalName.addBusinessModal, props: {} }))
      },
      {
        icon: <DomainAddIcon />,
        label: 'Додати великий бізнес',
        type: 'action',
        clickHandler: () => dispatch(openModal({ name: ModalName.addBusinessModal, props: { isLargeBusiness: true } }))
      },
      {
        key: 'divider-1',
        type: 'divider'
      },
      {
        icon: <AddHomeWorkIcon />,
        label: 'Розширити малий бізнес',
        type: 'action'
      }
    ],
    [dispatch]
  );

  const apartmentsActions = useMemo<DrawerItem[]>(
    () => [
      {
        icon: <ApartmentIcon />,
        label: 'Купити квартиру',
        type: 'action',
        clickHandler: () => dispatch(openModal({ name: ModalName.addApartmentsModal, props: {} as never }))
      },
      {
        icon: <AddCardIcon />,
        label: 'Взяти квартиру в кредит',
        type: 'action',
        clickHandler: () => dispatch(openModal({ name: ModalName.addApartmentsModal, props: {} as never }))
      },
      {
        key: 'divider-1',
        type: 'divider'
      },
      {
        icon: <DomainDisabledIcon />,
        label: 'Продати квартиру',
        type: 'action'
      }
    ],
    [dispatch]
  );

  return (
    <Container className="ch-main-page">
      <Helmet>
        <title>{getTitle(pageName)}</title>
      </Helmet>
      <SwipableDrawer onClose={onBusinessDrawerClose} onOpen={onBusinessDrawerOpen} isOpen={isBusinessDrawerOpen} items={businessActions} />
      <SwipableDrawer onClose={onApartmentsDrawerClose} onOpen={onApartmentsDrawerOpen} isOpen={isApartmentsDrawerOpen} items={apartmentsActions} />
      <SwipableDrawer onClose={onCreditDrawerClose} onOpen={onCreditDrawerOpen} isOpen={isCreditDrawerOpen} items={creditActions} />
      <MenuButton
        onBusinessDrawerOpen={onBusinessDrawerOpen}
        onApartmentsDrawerOpen={onApartmentsDrawerOpen}
        onCreditDrawerOpen={onCreditDrawerOpen}
      />
      <Header onLogoutClick={onExitGame} />
      <IncomeSection />
    </Container>
  );
};

export default MainPage;
