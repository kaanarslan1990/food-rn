import { StatusBar, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FoodOverViewScreen from "./screens/FoodOverViewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from '@expo/vector-icons';
import FavouriteContextProvider from "./store/favouriteContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          
          drawerIcon: () => (
            <Ionicons name="list" size={24} color="black" />
          ),
        }}
    
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          title: "Favourites",
          drawerIcon: () => (
            <Ionicons name="star-half-sharp" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "lightblue" },
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FoodOverview" component={FoodOverViewScreen} />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetailScreen}
          options={{ title: "Ingredient" }}
        />
      </Stack.Navigator>
      </Provider>
      {/* </FavouriteContextProvider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
