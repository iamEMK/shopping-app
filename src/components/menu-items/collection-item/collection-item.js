import React from 'react';
import './collection-item.scss';

const CollectionItem=({id,name,price,imageUrlo})=>(
    <div className="collection-item">
        <div className="image"
                style={{
                    backgroundImage:`url(${imageUrlo})`
                }} />
                <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price">${price}</span>
                </div>
    </div>
)
export default CollectionItem;