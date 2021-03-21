import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  
  return (
      <>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </>
    );
}

export default App;
