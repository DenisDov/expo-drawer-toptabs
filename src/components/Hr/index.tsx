import { Box } from '@app/theme';
import React from 'react';
import { StyleSheet } from 'react-native';

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
