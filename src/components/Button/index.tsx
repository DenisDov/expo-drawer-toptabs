import { Text } from '@app/theme';
import { Shadow } from 'react-native-shadow-2';
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
};

const Button = ({ onPress, title, isLoading }: Props) => {
  const handlePress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };
  return (
    <Shadow
      startColor={theme.colors.shadow}
      offset={[2, 2]}
      distance={2}
      style={styles.shadow}>
      <Pressable
        onPress={handlePress}
        disabled={isLoading}
        hitSlop={16}
        android_ripple={RIPPLE_CONFIG}
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.7 : 1 },
        ]}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text color="btnText">{title}</Text>
        )}
      </Pressable>
    </Shadow>
  );
};

export { Button };

const styles = StyleSheet.create({
  shadow: {
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 8,
  },
});
