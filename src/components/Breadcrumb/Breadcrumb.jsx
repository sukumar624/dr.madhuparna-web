import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Breadcrumb.css'; // Ensure you have appropriate styles

const Breadcrumb = ({ pathSegments, heading, image }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            if (entries[0].isIntersecting) {
                setImageLoaded(true);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, []);

    const segments = [{ path: '/', label: 'Home' }, ...pathSegments];
    const lastIndex = segments.length - 1;

    return (
        <div className="breadcrumb_area">
            {image && (
                <div className="breadcrumb_image" style={{ backgroundImage: imageLoaded ? `url(${image})` : 'none' }}>
                    <img
                        ref={imgRef}
                        src={image}
                        alt="Breadcrumb Background"
                        style={{ visibility: 'hidden', width: '0', height: '0' }}
                        loading="lazy"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>
            )}
            <div className="breadcrumb_overlay">
                <Container>
                    {heading && <h1 className="breadcrumb_heading">{heading}</h1>}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {segments.map((segment, index) => (
                                <li
                                    key={index}
                                    className={`breadcrumb-item ${index === lastIndex ? 'active' : ''}`}
                                >
                                    {index < lastIndex ? (
                                        <Link to={segment.path}>{segment.label}</Link>
                                    ) : (
                                        <span>{segment.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </Container>
            </div>
        </div>
    );
};

export default Breadcrumb;
