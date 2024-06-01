import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodOverViewScreen({route}) {
    const categoryId = route.params.categoryId
  return (
    <View>
      <Text>{categoryId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})