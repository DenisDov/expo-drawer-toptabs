import { Text, Box } from '@app/theme';
import React, { useState } from 'react';

import { Keyboard } from '@app/components/Keyboard';

const ArticleScreen2 = () => {
  const [num, setNum] = useState('');
  const handleKeyPress = (key: string) => {
    setNum(key);
  };

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      padding="m"
      justifyContent="space-between">
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Text>{num}</Text>
      </Box>
      <Keyboard onKeyPress={handleKeyPress} />
    </Box>
  );
};

export default ArticleScreen2;
