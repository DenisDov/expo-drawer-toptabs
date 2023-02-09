import React from 'react';

import { IPost } from '../../services/api/types';

import { Box, Text } from '../../theme';

const PostItem = ({ item }: { item: IPost }) => {
  return (
    <Box padding="m" borderRadius="s" backgroundColor="main" margin="s">
      <Text marginBottom="s">{item.id}</Text>
      <Text numberOfLines={2} marginBottom="s">
        {item.title}
      </Text>
      <Text numberOfLines={3}>{item.body}</Text>
    </Box>
  );
};

export { PostItem };
