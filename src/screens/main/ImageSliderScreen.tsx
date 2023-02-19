import { Text, Box } from '@app/theme';
import React from 'react';

import { ImageSlider } from '@app/components/ImageSlider';

const ImageSliderScreen = () => {
  return (
    <Box flex={1}>
      <ImageSlider />
    </Box>
  );
};

export default ImageSliderScreen;
