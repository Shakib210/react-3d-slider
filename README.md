# React 3D image slider

A customizable 3D image slider React component.

## Installation

```bash
npm install react-3d-slider
```

## Usage 
```bash

import React from 'react';
import ImageSlider from 'react-3d-slider';

const App = () => {
  const images = [
    { id: 1, path: 'https://example.com/image1.jpg' },
    { id: 2, path: 'https://example.com/image2.jpg' },
    { id: 3, path: 'https://example.com/image3.jpg' },
    { id: 4, path: 'https://example.com/image4.jpg' },
    { id: 5, path: 'https://example.com/image5.jpg' },
  ];

  return (
    <div>
      <h1>3D Image Slider</h1>
      <ImageSlider
        images={images}
        width={400}
        height={300}
        autoRotateInterval={5000}
        centerScale={1.2}
        sideScale={0.8}
        outerScale={0.6}
        centerBlur={0}
        sideBlur={2}
        outerBlur={4}
      />
    </div>
  );
};

export default App;
```

## Props

The ImageSlider component accepts the following props:

| Prop                | Type    | Default | Description                                                                     |
|---------------------|---------|---------|---------------------------------------------------------------------------------|
| `images`            | array   | required| An array of image URLs to be displayed in the slider                            |
| `width`             | number  | 300     | Width of the slider container in pixels                                         |
| `height`            | number  | 400     | Height of the slider container in pixels                                        |
| `autoRotateInterval`| number  | 10000   | Interval for automatic rotation in milliseconds                                 |
| `centerScale`       | number  | 1       | Scale factor for the center image                                               |
| `sideScale`         | number  | 0.8     | Scale factor for the side images                                                |
| `outerScale`        | number  | 0.6     | Scale factor for the outer images                                               |
| `centerBlur`        | number  | 0       | Blur amount for the center image in pixels                                      |
| `sideBlur`          | number  | 1       | Blur amount for the side images in pixels                                       |
| `outerBlur`         | number  | 2       | Blur amount for the outer images in pixels                                      |
| `onImageClick`      | number  | 2       | Callback function when an image is clicked, receives the image id as an argument|           |



## Advanced Usage

```jsx
import React from 'react';
import ImageSlider from 'react-3d-slider';

const App = () => {
  const images = [
    { id: 1, path: 'https://example.com/image1.jpg' },
    { id: 2, path: 'https://example.com/image2.jpg' },
    { id: 3, path: 'https://example.com/image3.jpg' },
    { id: 4, path: 'https://example.com/image4.jpg' },
    { id: 5, path: 'https://example.com/image5.jpg' },
  ];

  const handleImageClick = (image) => {
    console.log(image);
  };

  return (
    <div>
      <h1>Custom 3D Image Slider</h1>
      <ImageSlider
        images={images}
        width={500}
        height={300}
        autoRotateInterval={5000}
        centerScale={1.2}
        sideScale={0.8}
        outerScale={0.5}
        centerBlur={0}
        sideBlur={2}
        outerBlur={4}
        onImageClick={handleImageClick}
      />
    </div>
  );
};

export default App;
```

## Links

- **GitHub Repository**: [https://github.com/Shakib210/react-3d-slider](https://github.com/Shakib210/react-3d-slider)
- **Live Preview**: [https://668d711d90e061b7b1590c7f--profound-kangaroo-f8182c.netlify.app/](https://668d711d90e061b7b1590c7f--profound-kangaroo-f8182c.netlify.app/)

## Preview
![Alt text](https://github.com/Shakib210/react-3d-slider/blob/development/src/assets/slider-image.png)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
If you encounter any problems or have any questions, please open an issue on the GitHub repository.