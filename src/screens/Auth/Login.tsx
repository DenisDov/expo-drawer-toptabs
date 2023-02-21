import { Box, Text } from '@app/theme';
import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import useAuthStore from '@app/store/authStore';

async function authenticateUser() {
  const result = await LocalAuthentication.authenticateAsync({
    // cancel modal if user want to login with phone number
    cancelLabel: 'Cancel',
    disableDeviceFallback: true,
  });
  console.log('result: ', result);
  if (result.success) {
    console.log('Authentication succeeded');
    useAuthStore.getState().setAuthenticated(true);
  } else {
    console.log('Authentication failed');
  }
}

async function checkLocalAuthenticationExist() {
  const result = await LocalAuthentication.isEnrolledAsync();
  if (result) {
    authenticateUser();
  } else {
    console.log('Biometric not saved yet');
  }
}

export default function LoginScreen() {
  useEffect(() => {
    checkLocalAuthenticationExist();
  }, []);

  return (
    <Box flex={1} backgroundColor="mainBackground" padding="m">
      <Box alignItems="center">
        <BorderlessButton
          onPress={authenticateUser}
          borderless={false}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="finger-print-sharp" size={40} color="black" />
        </BorderlessButton>
        <Text>Authenticate with biometrics</Text>
      </Box>
    </Box>
  );
}
