import styled from "styled-components";

interface SliderContainerProps {
  height: number;
  width: number;
}

export const SliderContainer = styled.div<SliderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height}px;
  perspective: 1000px;
  cursor: grab;
`;

interface SliderWrapperProps {
  width: number;
  height: number;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

interface StyledSlideItemProps {
  transform: string;
  scale: number;
  clipPath: string;
  blur: number;
}

export const StyledSlideItem = styled.div<any>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.5s;
  transform: ${(props) => `${props.transform} scale(${props.scale})`};
  clip-path: ${(props) => props.clipPath};
  filter: ${(props) => `blur(${props.blur}px)`};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
