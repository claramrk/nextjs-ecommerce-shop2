'use client';
import './SlideShowContainer.css';
import React, { useEffect, useState } from 'react';

export default function SlideShowContainer() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      imgSrc:
        'https://familienausflug.info/img/4567/ausflugsziel-hermannsh%C3%B6hle-17088.jpg',
      alt: 'picture1',
      text: 'Caption Text',
    },
    {
      imgSrc:
        'https://www.wieneralpen.at/data/_wieneralpen/mediadb/cms_pictures/%7B14eb1d3d-b983-804c-8bea-18aca08e4510%7D.jpeg',
      alt: 'picture2',
      text: 'Caption Two',
    },
    {
      imgSrc:
        'https://vcdn.bergfex.at/images/resized/profiles/detail/fe6/4ee19122d218070c16f9a5bfdcdebfe6.jpg?1592293387',
      alt: 'picture3',
      text: 'Caption Three',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); // Increase the interval to slow down the slideshow

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={`${slide.alt}`}
          className={`mySlides ${index === slideIndex ? 'show' : ''}`}
        >
          <img src={slide.imgSrc} alt={slide.alt} style={{ width: '10%' }} />
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={`${_.alt}`}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}