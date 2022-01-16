import React, { useState } from 'react';
import './App.scss';
import Header from 'Components/Layout/Header/Header';
import Meals from 'Components/Meals/Meals';
import Cart from 'Components/Cart/Cart';
import CartProvider from 'Store/Context/CartProvider';

function App() {

  const [isShown, setIsShown] = useState(false);
  
  const toggleCartHandler = () => {;
    setIsShown(isVisible => !isVisible);
  }

  return (
    <CartProvider>
      {isShown && <Cart onClose={toggleCartHandler}/>}
      <Header onToggleCart={toggleCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
