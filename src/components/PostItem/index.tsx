import React from 'react';
import { Pressable } from 'react-native';

import { IPost } from '../../services/api/types';

import { Box, Text } from '../../theme';

const RIPPLE_CONFIG = {
  color: 'black',
  borderless: false,
  foreground: true,
};

const PostItem = ({ item }: { item: IPost }) => {
  return (
    <Pressable android_ripple={RIPPLE_CONFIG}>
      <Box padding="m" borderRadius="s" backgroundColor="main" margin="s">
        <Text marginBottom="s">{item.id}</Text>
        <Text numberOfLines={2} marginBottom="s">
          {item.title}
        </Text>
        <Text numberOfLines={3}>{item.body}</Text>
      </Box>
    </Pressable>
  );
};

export { PostItem };
