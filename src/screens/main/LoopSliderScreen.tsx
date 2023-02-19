import { Text, Box } from '@app/theme';
import React from 'react';

import LoopSlider from '@app/components/LoopSlider';

const LoopSliderScreen = () => {
  return (
    <Box flex={1}>
      <LoopSlider />
    </Box>
  );
};

export default LoopSliderScreen;
