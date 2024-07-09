import React, { useState, useEffect, useCallback, useRef, MouseEvent } from 'react';
import SlideItem from './SlideItem';
import { SliderContainer, SliderWrapper } from '../styles/SliderStyles';

interface Image {
  id: string;
  path: string;
}

interface ImageSliderProps {
  images: Image[];
  width?: number;
  height?: number;
  autoRotateInterval?: number;
  centerScale?: number;
  sideScale?: number;
  outerScale?: number;
  centerBlur?: number;
  sideBlur?: number;
  outerBlur?: number;
  onImageClick?: (image: Image) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  width = 300,
  height = 400,
  autoRotateInterval = 10000,
  centerScale = 1,
  sideScale = 0.8,
  outerScale = 0.6,
  centerBlur = 0,
  sideBlur = 1,
  outerBlur = 2,
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const rotateSlider = useCallback((direction: 'next' | 'prev') => {
    setCurrentIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateSlider('next');
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [rotateSlider, autoRotateInterval]);

  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + images.length) % images.length;
    let transform = '';
    let clipPath = '';
    let scale = 1;
    let blur = 0;

    switch (diff) {
      case 0:
        transform = 'translateZ(0)';
        clipPath = 'inset(0 0 0 0)';
        scale = centerScale;
        blur = centerBlur;
        break;
      case 1:
      case images.length - 1:
        transform = `translateX(${diff === 1 ? '50%' : '-50%'}) translateZ(-100px)`;
        clipPath = `inset(0 ${diff === 1 ? '0 0 50%' : '50% 0 0'})`;
        scale = sideScale;
        blur = sideBlur;
        break;
      case 2:
      case images.length - 2:
        transform = `translateX(${diff === 2 ? '100%' : '-100%'}) translateZ(-200px)`;
        clipPath = `inset(0 ${diff === 2 ? '0 0 50%' : '50% 0 0'})`;
        scale = outerScale;
        blur = outerBlur;
        break;
      default:
        transform = 'translateZ(-300px)';
        clipPath = 'inset(0 100% 0 100%)';
    }

    return { transform, clipPath, scale, blur };
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      rotateSlider(diff > 0 ? 'next' : 'prev');
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleClick = (image: Image) => {
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      width={width}
      height={height}
    >
      <SliderWrapper width={width} height={height}>
        {images.map((image, index) => (
          <SlideItem
            key={image.id}
            image={image.path}
            width={width}
            height={height}
            onClick={() => handleClick(image)}
            {...getSlideStyle(index)}
          />
        ))}
      </SliderWrapper>
    </SliderContainer>
  );
};

export default ImageSlider;
