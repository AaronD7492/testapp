import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./screens/AccountScreen";
import DriverScoreScreen from "./screens/DriverScoreScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="DriverScore" component={DriverScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
