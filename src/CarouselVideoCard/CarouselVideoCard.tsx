import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { VideoSource } from '../types';
import { ButtonList, CarouselItem, Icon, Video } from "./CarouselVideoCard.styles";

type Props = {
  index: number;
  currentIndex: number;
  isActive: boolean;
  video: VideoSource;
};

export const CarouselVideoCard: React.FC<Props> = ({ index, currentIndex, isActive, video }) => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(isActive);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const cssTranslationValue = useMemo(() => currentIndex * 309, [currentIndex]);

  useEffect(() => {
    setVideoElement(document.querySelector<HTMLVideoElement>(`#carousel-video-${index + 1}`));
  }, [index]);

  const playVideo = useCallback(() => {
    if (!videoElement) return;
    videoElement.play().catch((error) => {
      console.error(`Error trying to play video ${index + 1}:`, error);
    });
    setIsPlaying(true);
  }, [videoElement, index]);

  const stopVideo = useCallback(() => {
    if (!videoElement) return;
    videoElement.pause();
    setIsPlaying(false);
  }, [videoElement]);

  useEffect(() => {
    if (!videoElement) return;
    if (isActive) {
      playVideo();
    } else {
      stopVideo();
    }
  }, [isActive, playVideo, stopVideo, videoElement]);

  const handlePlayStopToggle = () => {
    if (!videoElement) return;
    if (isPlaying) {
      stopVideo();
    } else {
      playVideo();
    }
  }

  const handleMuteUnmuteToggle = () => {
    setIsMuted((prevMuted) => !prevMuted);
  }

  return (
    <CarouselItem
      active={isActive}
      style={{ transform: `translate(-${cssTranslationValue}px)` }}
      role="option"
      aria-label={`Video ${index + 1}`}
      aria-selected={isActive}
    >
      <Video
        id={`carousel-video-${index + 1}`}
        width={202}
        preload="auto"
        autoPlay={isActive}
        muted={isMuted}
        loop
      >
        <source src={video.source} type={video.type} />
        Your browser doesn't support the video tag.
      </Video>
      {isActive && (
        <ButtonList>
          {isMuted ? (
            <Icon src="/assets/icons/mute.svg" alt="Mute icon" role="button" aria-label="Mute video" onClick={handleMuteUnmuteToggle} />
          ) : (
            <Icon src="/assets/icons/unmute.svg" alt="Unmute icon" role="button" aria-label="Unmute video" onClick={handleMuteUnmuteToggle} />
          )}
          {isPlaying ? (
            <Icon src="/assets/icons/pause.svg" alt="Pause icon" role="button" aria-label="Pause video" onClick={handlePlayStopToggle} />
          ) : (
            <Icon src="/assets/icons/play.svg" alt="Play icon" role="button" aria-label="Play video" onClick={handlePlayStopToggle} />
          )}
        </ButtonList>
      )}
    </CarouselItem>
  );
}
