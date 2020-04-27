import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { AddForm } from './components/AddForm';
import { ShoppingCartList } from './components/ShoppingCartList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <React.Fragment>
      <GlobalProvider>
      <Header />
        <div className="container">
          <AddForm />
          <ShoppingCartList />
        </div>
        </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
