import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth/Register';
import ArticleScreen from '../screens/main/ArticleScreen';
import SetingsScreen from '../screens/main/SetingsScreen';
import TabOneScreen from '../screens/main/TabOneScreen';
import TabTwoScreen from '../screens/main/TabTwoScreen';

export default function Navigation({ theme }) {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOneScreen} />
      <Tab.Screen name="TabTwo" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const isAuth = true;
  return isAuth ? (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="Setings" component={SetingsScreen} />
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
