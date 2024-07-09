import React from 'react';
import { StyledSlideItem } from '../styles/SliderStyles';

interface SlideItemProps {
  image: string;
  width: number;
  height: number;
  transform: string;
  clipPath: string;
  scale: number;
  blur: number;
  onClick: () => void;
}

const SlideItem: React.FC<SlideItemProps> = ({ image, width, height, transform, clipPath, scale, blur, onClick }) => (
  <StyledSlideItem
    style={{
      backgroundImage: `url(${image})`,
      width: `${width}px`,
      height: `${height}px`,
      transform: transform,  // Note: Removed the scale part from here
      clipPath: clipPath,
      filter: `blur(${blur}px)`
    }}
    onClick={onClick}
  />
);

export default SlideItem;
