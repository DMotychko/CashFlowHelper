import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@mui/material/Container';
import IncomeSection from '../components/mainPage/IncomeSection';
import { getTitle } from '../helpers/common';

import '../styles/pages/mainPage.scss';
import MenuButton from '../components/mainPage/MenuButton';

const pageName = 'Головна';

const MainPage: React.FunctionComponent = () => {
    

    return (
        <Container className='ch-main-page'>
            <Helmet>
                <title>{getTitle(pageName)}</title>
            </Helmet>
            
            <MenuButton />
            <IncomeSection />
        </Container>
    );
};

export default MainPage;