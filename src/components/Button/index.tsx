import { Text } from '@app/theme';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';
import * as Haptics from 'expo-haptics';

import { theme } from '@app/theme';

type Props = {
  onPress: () => void;
  title: string;
  isLoading?: boolean;
};

const RIPPLE_CONFIG = {
  color: theme.colors.mainActive,
  borderless: true,
  // foreground: true
};

const Button = ({ onPress, title, isLoading }: Props) => {
  const handlePress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };
  return (
    <Pressable
      onPress={handlePress}
      disabled={isLoading}
      hitSlop={16}
      android_ripple={RIPPLE_CONFIG}
      style={({ pressed }) => [
        styles.button,
        Platform.OS === 'ios' && { opacity: pressed ? 0.7 : 1 },
      ]}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text color="btnText">{title}</Text>
      )}
    </Pressable>
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 8,
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
});
