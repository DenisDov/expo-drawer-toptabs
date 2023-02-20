import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

async function authenticateUser() {
  const result = await LocalAuthentication.authenticateAsync();
  if (result.success) {
    console.log('Authentication succeeded');
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
