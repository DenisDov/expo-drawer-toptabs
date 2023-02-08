import { FontAwesome } from "@expo/vector-icons";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/Home/ModalScreen";

import TabOneScreen from "../screens/Home/TabOneScreen";
import TabTwoScreen from "../screens/Home/TabTwoScreen";
import { RootStackParamList } from "./types";
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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const userToken = "JWT 123";
  console.log("userToken: ", userToken);
  return (
    <Stack.Navigator>
      {userToken ? (
        <Stack.Screen name="Home" component={MyDrawer} />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={
              {
                // title: "Login",
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                // animationTypeForReplace: "pop",
              }
            }
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={
              {
                // title: "Register",
              }
            }
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Root"
    //     component={BottomTabNavigator}
    //     options={{ headerShown: false }}
    //   />

    //   <Stack.Group screenOptions={{ presentation: "modal" }}>
    //     <Stack.Screen name="Modal" component={ModalScreen} />
    //   </Stack.Group>
    // </Stack.Navigator>
  );
}

// const BottomTab = createBottomTabNavigator<RootTabParamList>();
