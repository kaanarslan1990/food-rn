import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { Ionicons } from "@expo/vector-icons";
import { FavouriteContext } from "../store/favouriteContext";

export default function FoodDetailScreen({ route, navigation }) {
  const favouriteFoodContext = useContext(FavouriteContext);

  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);
  const foodIsFavourite = favouriteFoodContext.ids.includes(foodId);

  const pressHandler = () => {};
  function changeFavourite() {
    if (foodIsFavourite) {
      favouriteFoodContext.removeFavourite(foodId);
    } else {
      favouriteFoodContext.addFavourite(foodId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={pressHandler}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
          >
            <Ionicons
              name={foodIsFavourite ? "star" : "star-outline"}
              size={24}
              color="white"
              onPress={changeFavourite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation,changeFavourite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContianer}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "red",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContianer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginVertical: 5,
  },
  subTitle: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.6,
  },
});
