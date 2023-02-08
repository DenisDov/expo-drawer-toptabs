import { createBox } from '@shopify/restyle';
import { ScrollView, ScrollViewProps } from 'react-native';

import { Theme } from './theme';

const ScrollBox = createBox<
  Theme,
  ScrollViewProps & { children?: React.ReactNode }
>(ScrollView);

export default ScrollBox;
