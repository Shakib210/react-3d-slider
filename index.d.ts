declare module 'react-3d-slider' {
    import * as React from 'react';
  
    export interface SliderProps {
      width?: number;
      height?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      pauseOnHover?: boolean;
      children: React.ReactNode;
    }
  
    const Slider: React.FC<SliderProps>;
  
    export default Slider;
  }
  