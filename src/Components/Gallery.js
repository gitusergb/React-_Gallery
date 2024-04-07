import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';


const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('https://bb-nwfw.onrender.com/Gifts')
            .then(response => response.json())
            .then(data => {
                // Extract required data from the fetched response
                const formattedData = data.map(item => ({
                    title: item.title,
                    price: item.price,
                    imageUrl: item.images[0], 
                   
                }));
                // Update the state with the fetched data
                setImages(formattedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 
    // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div className="gallery">
            {/* Map through the images state and render ImageCard components */}
            {images.map((image, index) => (
                <ImageCard key={index} title={image.title} price={image.price} imageUrl={image.imageUrl} />
            ))}
        </div>
    );
}

export default Gallery