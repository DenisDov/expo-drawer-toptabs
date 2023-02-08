import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '../../theme';

const Hr = () => {
  return (
    <Box
      marginVertical="m"
      height={StyleSheet.hairlineWidth}
      backgroundColor="main"
    />
  );
};

export { Hr };
