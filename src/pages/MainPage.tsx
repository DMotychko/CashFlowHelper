import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@mui/material/Container';
import IncomeSection from '../components/mainPage/IncomeSection';
import { getTitle } from '../helpers/common';
import Header from '../components/mainPage/Header';
import MenuButton from '../components/mainPage/MenuButton';

import '../styles/pages/mainPage.scss';

const pageName = 'Головна';

type Props = {
  onExitGame: () => void;
};

const MainPage: React.FunctionComponent<Props> = ({ onExitGame }) => {
  return (
    <Container className="ch-main-page">
      <Helmet>
        <title>{getTitle(pageName)}</title>
      </Helmet>
      <Header onLogoutClick={onExitGame} />
      <MenuButton />
      <IncomeSection />
    </Container>
  );
};

export default MainPage;
