import { Box, Text } from '@app/theme';
import { Switch } from 'react-native';

import { Hr } from '@app/components/Hr';
import { Button } from '@app/components/Button';
import TypingText from '@app/components/TypingText';

import useAuthStore from '@app/store/authStore';
import useUiStore from '@app/store/uiStore';

export default function SettingsScreen() {
  const darkMode = useUiStore(state => state.darkMode);
  const toggleThemeMode = useUiStore(state => state.toggleThemeMode);

  const handleLogout = () => {
    useAuthStore.getState().setAuthenticated(false);
  };

  return (
    <Box flex={1} backgroundColor="mainBackground" padding="m">
      <Box flexDirection="row" alignItems="center">
        <Box flex={1}>
          <Text>Toggle theme</Text>
        </Box>
        <Switch
          trackColor={{ false: '#767577', true: 'gray' }}
          thumbColor={darkMode ? 'hsl(211, 100%, 40%)' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleThemeMode}
          value={darkMode}
        />
      </Box>
      <Hr />
      {/* <Button title="Logout" onPress={handleLogout} /> */}
      <Button title="Logout" onPress={() => null} />
      <Hr />
      <TypingText
        text={[
          'Hi! Welcome to the animated typing tutorial...',
          'We are here to help',
        ]}
      />
    </Box>
  );
}
