import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGallery.css';
import img1 from '../../assets/img/gallery-1.jpg';
import img2 from '../../assets/img/gallery-2.jpg';
import img3 from '../../assets/img/gallery-3.jpg';
import img4 from '../../assets/img/gallery-4.jpg';
import img5 from '../../assets/img/gallery-5.jpg';
import img6 from '../../assets/img/gallery-6.jpg';
import img7 from '../../assets/img/gallery-7.jpg';
import img8 from '../../assets/img/gallery-8.jpg';
import img9 from '../../assets/img/gallery-9.jpg';

const MasonryGallery = () => {
    // Sample image data, replace these URLs with your image sources
    const images = [
        img3,
        img4,
        img1,
        img2,
        img5,
        img6,
        img7,
        img8,
        img9,

    ];

    // Breakpoint columns object, define how many columns to display at different screen sizes
    const breakpointColumnsObj = {
        default: 3, // 3 columns default
        1100: 2, // 2 columns if window width is less than 1100px
        500: 1 // 1 column if window width is less than 700px
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
        >
            {images.map((image, index) => (
                <div key={index} className="masonry-item">
                    <img src={image} alt={`Gallery Image ${index + 1}`} />
                </div>
            ))}
        </Masonry>
    );
};

export default MasonryGallery;
