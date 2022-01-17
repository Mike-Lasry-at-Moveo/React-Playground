import React, { useState, Suspense } from 'react';
import './App.scss';
import Header from 'Components/Layout/Header/Header';
import Meals from 'Components/Meals/Meals';
// import Cart from 'Components/Cart/Cart';
import CartProvider from 'Store/Context/CartProvider';
const Cart = React.lazy(() => import('Components/Cart/Cart'));

function App() {

  const [isShown, setIsShown] = useState(false);
  
  const toggleCartHandler = () => {;
    setIsShown(isVisible => !isVisible);
  }

  return (
    <CartProvider>
      <Suspense fallback={<h1>Loading....</h1>}>
        {isShown && <Cart onClose={toggleCartHandler}/>}
      </Suspense>
      <Header onToggleCart={toggleCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
