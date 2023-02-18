import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import useUiStore from '@app/store/uiStore';

import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth/Register';
import ArticleScreen from '../screens/main/ArticleScreen';
import FeedScreen from '../screens/main/FeedScreen';
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

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const darkMode = useUiStore(state => state.darkMode);
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView
            tint={darkMode ? 'dark' : 'light'}
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          // title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          // title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const isAuth = true;
  return isAuth ? (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Setings" component={SetingsScreen} />
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
