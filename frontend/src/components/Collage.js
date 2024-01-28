import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Collage.css';

const Collage = () => {
  const dummyData = [
    {
      id: 1,
      photoUrl: 'https://placekitten.com/800/400',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      photoUrl: 'https://placekitten.com/800/401',
      summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more dummy data as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlides = () => {
    return dummyData.map((item) => (
      <div key={item.id} className="collage-slide">
        <div className="collage-grid">
          <img src={item.photoUrl} alt={`Slide ${item.id}`} />
          <p className="summary-text">{item.summary}</p>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % dummyData.length);
    }, 5000); // Move to the next slide every 5 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [dummyData.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + dummyData.length) % dummyData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % dummyData.length);
  };

  return (
    <div className="collage-wrapper">
      <div className="collage-container">
        <Carousel selectedItem={currentSlide} showArrows={false} renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <li
                style={{ marginBottom: '55px', listStyle: 'none', display: 'inline-block' }}
                onClick={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
                title={`${label} ${index + 1}`}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    margin: '0 4px',
                    backgroundColor: isSelected ? '#007bff' : '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                  }}
                />
              </li>
            );
          }}
        >
          {renderSlides()}
        </Carousel>
        <div className="controls">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Collage;
