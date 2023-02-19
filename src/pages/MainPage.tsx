import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@mui/material/Container';
import IncomeSection from '../components/mainPage/IncomeSection';
import { getTitle } from '../helpers/common';
import Header from '../components/mainPage/Header';
import MenuButton from '../components/mainPage/MenuButton';

import '../styles/pages/mainPage.scss';

const pageName = 'Головна';

const MainPage: React.FunctionComponent = () => {
  return (
    <Container className="ch-main-page">
      <Helmet>
        <title>{getTitle(pageName)}</title>
      </Helmet>
      <Header />
      <MenuButton />
      <IncomeSection />
    </Container>
  );
};

export default MainPage;
