import React, { useState } from 'react';

import { CarouselVideoCard } from '../CarouselVideoCard/CarouselVideoCard';
import { VideoSource } from '../types';
import {
  Carousel,
  CarouselContainer,
  CarouselHeader,
  CarouselNavigation,
  CarouselNavigationButton,
  CarouselTitle
} from './CarouselVideo.styles';

type Props = {
  videoSources: VideoSource[];
};

export const CarouselVideo: React.FC<Props> = ({ videoSources }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalVideos = videoSources.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalVideos);
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalVideos) % totalVideos);
  };

  return (
    <CarouselContainer>
      <CarouselHeader>
        <CarouselTitle>A day in the life</CarouselTitle>
        <CarouselNavigation>
          <CarouselNavigationButton role="button" aria-label="Previous video" onClick={handlePrevious}>
            <img src="/assets/icons/chevron-left.svg" alt="Left arrow icon" />
          </CarouselNavigationButton>
          <CarouselNavigationButton role="button" aria-label="Next video" onClick={handleNext}>
            <img src="/assets/icons/chevron-right.svg" alt="Right arrow icon" />
          </CarouselNavigationButton>
        </CarouselNavigation>
      </CarouselHeader>
      <Carousel role="listbox" aria-label="Carousel">
        {videoSources.map((video, index) => (
          <CarouselVideoCard
            key={index}
            index={index}
            currentIndex={currentIndex}
            isActive={index === currentIndex}
            video={video}
          />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
