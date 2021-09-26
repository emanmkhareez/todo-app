import React from 'react';
import ToDo from './components/toDO/todo';
import SettingsContext from './context/contaxt';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'



function App() {
    return (
      <>
         <SettingsContext>
          <Header />
          <ToDo />
        </SettingsContext>
      </>
    );
  }
  
export default App;