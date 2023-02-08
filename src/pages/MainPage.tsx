import React from 'react';
import { Helmet } from 'react-helmet';
import IncomeSection from '../components/mainPage/IncomeSection';
import { getTitle } from '../helpers/common';

import '../styles/pages/mainPage.scss';

const pageName = 'Main';

const MainPage: React.FunctionComponent = () => {
    return (
        <div className='ch-main-page'>
            <Helmet>
                <title>{getTitle(pageName)}</title>
            </Helmet>
            
            <IncomeSection />
        </div>
    );
};

export default MainPage;