import React from 'react';
import { Pressable } from 'react-native';

import { IPost } from '../../services/api/types';

import { Box, Text, PressableBox } from '../../theme';

const RIPPLE_CONFIG = {
  color: 'black',
  borderless: false,
  foreground: true,
};

const PostItem = ({ item }: { item: IPost }) => {
  return (
    <PressableBox
      android_ripple={RIPPLE_CONFIG}
      elevation={5}
      borderRadius="s"
      backgroundColor="main"
      overflow="hidden"
      margin="s">
      <Box padding="m">
        <Text marginBottom="s">{item.id}</Text>
        <Text numberOfLines={2} marginBottom="s">
          {item.title}
        </Text>
        <Text numberOfLines={3}>{item.body}</Text>
      </Box>
    </PressableBox>
  );
};

export { PostItem };
