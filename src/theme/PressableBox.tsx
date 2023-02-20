import { createBox } from '@shopify/restyle';
import { Pressable, PressableProps } from 'react-native';

import { Theme } from './theme';

const PressableBox = createBox<Theme, PressableProps>(Pressable);

export default PressableBox;
