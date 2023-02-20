import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import useAuthStore from '@app/store/authStore';
import useUiStore from '@app/store/uiStore';

import LoginScreen from '@app/screens/auth/Login';
import RegisterScreen from '@app/screens/auth/Register';
import ArcSliderScreen from '@app/screens/main/ArcSlider';
import ArticleScreen from '@app/screens/main/ArticleScreen';
import ArticleScreen2 from '@app/screens/main/ArticleScreen2';
import ArticleScreen3 from '@app/screens/main/ArticleScreen3';
import FeedScreen from '@app/screens/main/FeedScreen';
import ImageSliderScreen from '@app/screens/main/ImageSliderScreen';
import LoopSliderScreen from '@app/screens/main/LoopSliderScreen';
import SetingsScreen from '@app/screens/main/SetingsScreen';
import TabOneScreen from '@app/screens/main/TabOneScreen';
import TabTwoScreen from '@app/screens/main/TabTwoScreen';

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
      <Tab.Screen name="tab 1" component={TabOneScreen} />
      <Tab.Screen name="tab 2" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const darkMode = useUiStore(state => state.darkMode);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return isAuthenticated ? (
    <Drawer.Navigator
      screenOptions={{ ...(darkMode && { headerTintColor: '#FFFFFF' }) }}>
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="Article2" component={ArticleScreen2} />
      <Drawer.Screen name="ArticleScreen3" component={ArticleScreen3} />
      <Drawer.Screen name="LoopSliderScreen" component={LoopSliderScreen} />
      <Drawer.Screen name="ImageSliderScreen" component={ImageSliderScreen} />
      <Drawer.Screen name="ArcSliderScreen" component={ArcSliderScreen} />
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
