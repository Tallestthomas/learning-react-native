import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createBottomTabNavigator();

const Scene = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Hello</Text>
    <Button
      title="Go to Second"
      onPress={() => navigation.navigate("Second Screen")}
    />
  </View>
);

const Scene2 = () => (
  <View style={styles.container}>
    <Text>This is a second view</Text>
  </View>
);

const routeHandler = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused
        ? "ios-information-circle"
        : "ios-information-circle-outline";
    } else if (route.name === "Second Screen") {
      iconName = focused ? "ios-list-box" : "ios-list";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={routeHandler}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
        }}
      >
        <Stack.Screen name="Home" component={Scene} />
        <Stack.Screen name="Second Screen" component={Scene2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
