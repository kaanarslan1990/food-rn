import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
