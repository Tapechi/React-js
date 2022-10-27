import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  const {cardTitle, greeting} = props;
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">{cardTitle}</h3>
        <p className="card-text">{greeting}</p>
      </div>
    </div>
  );
};

export default ItemListContainer;
