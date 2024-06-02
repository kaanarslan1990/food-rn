import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavouriteContext } from "../store/favouriteContext";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";
import { useSelector } from "react-redux";

export default function FavouriteScreen() {
  // const favouriteFoodContext = useContext(FavouriteContext);
  const favouriteFoodsIds = useSelector((state) => state.favouriteFoods.ids);

  const favouriteFoods = FOODS.filter((food) =>
    favouriteFoodsIds.includes(food.id)
  );

  if (favouriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You don't have favourites!</Text>
      </View>
    );
  }

  return <FoodList items={favouriteFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
});
