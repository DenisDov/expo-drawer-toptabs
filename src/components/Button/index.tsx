import { Text } from '@app/theme';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
  isLoading?: boolean;
};

const Button = ({ onPress, title, isLoading }: Props) => {
  const theme = useTheme();
  const RIPPLE_CONFIG = {
    // color: theme.colors.mainActive,
    borderless: true,
    //   radius: 32,
    //   foreground: false,
  };
  return (
    <Pressable
      disabled={isLoading}
      onPress={onPress}
      hitSlop={16}
      android_ripple={RIPPLE_CONFIG}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'red' : theme.colors.main,
        },
        styles.button,
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
    borderRadius: 8,
    shadowColor: '#0B0B0B',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
});
