import { Text, Box } from '@app/theme';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import HueColorCircle from '@app/components/ArcSlider';

const ArcSliderScreen = () => {
  const [color, setColor] = useState('#ff0000');

  const onColorChange = newColor => {
    setColor(newColor);
  };
  return (
    <Box flex={1}>
      <HueColorCircle
        size={200}
        initialColor={color}
        onColorChange={onColorChange}
      />
    </Box>
  );
};

export default ArcSliderScreen;
