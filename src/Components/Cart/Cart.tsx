import React, { Fragment, useContext, useState } from "react";
import "Components/Cart/Cart.scss";
import { ClassName } from "Config/Util/constants";
import Modal from "Components/Layout/Modal/Modal";
import CartContext from "Store/Context/CartContext";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";
import axios from "axios";


export default function Cart (props: any) {
    
    const cartCtx = useContext<any>(CartContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = !  cartCtx.isEmpty();
    

    const [isCheckout, setIsCheckout] = useState(false)

    const submitHandler = async (userData: any) => {
        setIsSubmitting(true);
        const payload = {
            user: userData,
            items: cartCtx.items
        }
        //const responseWrapper = await axios.post("http://127.0.0.1:3500/api/orders", payload); // handle response
        
        // const response = responseWrapper.data;
        // if(response.success){
            setIsSubmitting(false);
            setDidSubmit(true);
            cartCtx.clearCart();
        // }

    };

    const onAddItemHanler = (item: any) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const onRemoveItemHanler = (id: any) => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className={ClassName.CART_ITEMS}>
        { cartCtx.items.map((i:any) => <CartItem 
            key={i.id}
            name={i.name}
            price={i.price} 
            amount={i.amount}
            onRemove={onRemoveItemHanler.bind(null, i.id)} 
            onAdd={onAddItemHanler.bind(null, i)} />
        )}
    </ul>;

    const orderHandler = () => setIsCheckout(true);
    
    const modalActions = <div className={ClassName.ACTS}>
            <button onClick={props.onClose} className={ClassName.BTN_ALT}>Close</button>
            {hasItems && <button onClick={orderHandler} className={ClassName.BTN_ORDER}>Order</button>}
        </div>

    const orderTotalPrice = <div className={ClassName.TOATL}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>

    const cartCheckout = isCheckout && hasItems ?  <Checkout onConfirm={submitHandler} onCancel={props.onClose}/> : modalActions

    const cartModalContent = <Fragment>
            {cartItems}
            {orderTotalPrice}
            {cartCheckout}
        </Fragment>

    const isSubmittingModalContent = <p>Sending order date...</p>;

    const didSubmitModalContent = <Fragment>
        <p>Successfully sent the order!</p>
        <button onClick={props.onClose} className={ClassName.BTN_ALT}>Close</button>
    </Fragment>
    
    return <Modal onClose={props.onClose}>    
        { !isSubmitting && !didSubmit && cartModalContent }
        { isSubmitting && isSubmittingModalContent }
        { !isSubmitting && didSubmit && didSubmitModalContent }
    </Modal>
}