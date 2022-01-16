import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {getLocalLang} from './store/actions/session';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import BaseLayout from './pages/BaseLayout';
import BaseRouter from './routes';

export const MainApp = styled.div`
  font-family: 'Poppins', sans-serif;
`

function App(props: any) {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = getLocalLang()
    console.log(lang)
    i18n.changeLanguage(lang)
  }, [])

  return (
    <div>
      <MainApp>
        <Router>
          <BaseLayout>
              <BaseRouter />
          </BaseLayout>
        </Router>
      </MainApp>  
    </div>
    
      
  );
}

export default App;
