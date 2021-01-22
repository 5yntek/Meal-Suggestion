import React from "react";
import { View, Text } from "react-native";

/**
 * Little search engine to search ingredients by name
 * @param {*} props
 */
export default function SearchIngredientScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SearchIngredientScreen</Text>
    </View>
  );
}
