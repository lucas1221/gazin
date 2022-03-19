import React from 'react';
import TelaPrincipal from './screens/TelaPrincipal';
import Provider from './services/Context';

export default function App() 
{
  return (
    <Provider>
      <TelaPrincipal/>
    </Provider>
  );
}

