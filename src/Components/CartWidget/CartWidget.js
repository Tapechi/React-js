import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = (props) => {
  return (
    <div className="CartWidget">
      <button onClick={() => console.log('Carrito')}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};
export default CartWidget;
