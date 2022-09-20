import React from 'react';
import './App.css';
import { Header } from './desconto/Header';
import { Img } from './img/Img';
import { Main } from './main/Main';

function App() {
  return (
    <div className="app">
      <Header />
        <Img />
        <Main />
        <p style={{
          color: '#F9F9F9',
          display: 'flex',
          justifyContent: 'center',
        }}
        >Todos os direitos reservados.</p>
    </div>
  );
}

export default App;
