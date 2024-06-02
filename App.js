import { StatusBar, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FoodOverViewScreen from "./components/FoodOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          contentStyle:{backgroundColor:'lightblue'}
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{title:'All Categories'}} />
        <Stack.Screen name="FoodOverview" component={FoodOverViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
