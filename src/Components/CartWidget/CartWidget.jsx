import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = (props) => {
  return (
    <div className="CartWidget">
      <button onClick={() => console.log('Carrito')}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <span className="position-absolute top-30 start-90 translate-middle badge rounded-pill bg-danger">
    1
    <span class="visually-hidden">unread messages</span>
  </span>

      </button>
    </div>
  );
};
export default CartWidget;
