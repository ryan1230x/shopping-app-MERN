import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { AddForm } from './components/AddForm';
import { ShoppingCartList } from './components/ShoppingCartList';

function App() {
  return (
    <React.Fragment>
      <Header />
        <div className="container">
          <AddForm />
          <ShoppingCartList />
        </div>
    </React.Fragment>
  );
}

export default App;
