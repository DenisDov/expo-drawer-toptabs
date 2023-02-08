import { FontAwesome } from "@expo/vector-icons";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TabOneScreen from "../screens/Home/TabOneScreen";
import TabTwoScreen from "../screens/Home/TabTwoScreen";
import LoginScreen from "../screens/Auth/Login";
import FeedScreen from "../screens/Home/FeedScreen";
import ArticleScreen from "../screens/Home/ArticleScreen";
import RegisterScreen from "../screens/Auth/Register";

export default function Navigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();
// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={FeedScreen} />
//       <Drawer.Screen name="Article" component={ArticleScreen} />
//     </Drawer.Navigator>
//   );
// }

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
  const isAuth = true;
  return isAuth ? (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={MyTabs} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
