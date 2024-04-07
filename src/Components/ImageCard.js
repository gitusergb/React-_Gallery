/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const ImageCard = ({ title, price,imageUrl }) => {
    return (
        <div className="image-card">
            <img src={imageUrl} alt="Image" />
            <h2>{title}</h2>
            <p>$ {price}</p>
        </div>
    );
}

export default ImageCard;