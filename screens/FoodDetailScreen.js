import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodDetailScreen({route}) {
    const foodId = route.params.foodId
  return (
    <View>
      <Text>{foodId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})