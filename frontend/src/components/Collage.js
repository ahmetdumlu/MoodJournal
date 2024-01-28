import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Collage.css';

const Collage =  () => {
  
  const dummyData = [
    {
      id: 1,
      photoUrl: 'birthday_photo.png',
      summary: 'I am so surprised and delighted by the surprise birthday party my family and friends prepared for me. The decorations, greetings, hugs, and shared memories made the day so special and unforgettable. I am so grateful for these precious people in my life.',
    },
    {
      id: 2,
      photoUrl: 'graduation_photo.jpg',
      summary: 'I reflect on my graduation day, a mix of emotions from joy to nostalgia. I felt proud and accomplished, surrounded by classmates and family cheering me on. I cherish this milestone, marking the end of one chapter and the start of another closer to my dreams.',
    },
    {
      id: 3,
      photoUrl: 'date.png',
      summary: 'I met my soulmate at a coffee shop. Our conversation was easy, and we felt a strong connection. That meeting changed my life as I knew it, and I found true love.',
    },
    {
      id: 4,
      photoUrl: 'congrats.png',
      summary: 'I received my dream job offer today, a culmination of years of hard work and perseverance, sparking overwhelming joy and excitement for the impactful future ahead.',
    },
    {
      id: 5,
      photoUrl: 'climber.png',
      summary: 'Today, I fulfilled my dream of traveling the world, experiencing a profound sense of freedom and accomplishment atop a breathtaking mountain vista, igniting my passion for adventure.',
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
                style={{ marginBottom: '100px', listStyle: 'none', display: 'inline-block' }}
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
