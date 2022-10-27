import './ItemListContainer.css';
import React from 'react';



const ItemListContainer = (props) => {
    return (
        <div>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.greeting}</p>
            </div>
        </div>
    );
};

export default ItemListContainer 