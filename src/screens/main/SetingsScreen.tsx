import { Switch } from 'react-native';

import { Hr } from '../../components/Hr';

import useUiStore from '../../store/uiStore';

import { Box, Text } from '../../theme';

export default function SettingsScreen() {
  const darkMode = useUiStore(state => state.darkMode);
  const toggleThemeMode = useUiStore(state => state.toggleThemeMode);

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
    </Box>
  );
}
