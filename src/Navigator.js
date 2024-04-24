import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Open from "./Open";
import Products from "./screens/Products";


const Navigator = () => {
  const Stack=createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Open">
    <Stack.Screen name="Open" component={Products}/>
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Navigator;

const styles = StyleSheet.create({});
