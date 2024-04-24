import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigator from "./Navigator";

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Navigator/>
  );
};

export default Home;

const styles = StyleSheet.create({});
