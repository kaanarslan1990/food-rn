import { StatusBar, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FoodOverViewScreen from "./screens/FoodOverViewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";

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
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} options={{title:'Ingredient'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
