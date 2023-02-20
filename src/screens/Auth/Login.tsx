import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import useAuthStore from '@app/store/authStore';

async function authenticateUser() {
  const result = await LocalAuthentication.authenticateAsync();
  console.log('result: ', result);
  if (result.success) {
    console.log('Authentication succeeded');
    useAuthStore.getState().setAuthenticated(true);
  } else {
    console.log('Authentication failed');
  }
}

export default function LoginScreen() {
  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Press the button to authenticate with biometrics</Text>
      <Button title="Authenticate" onPress={authenticateUser} />
    </View>
  );
}
