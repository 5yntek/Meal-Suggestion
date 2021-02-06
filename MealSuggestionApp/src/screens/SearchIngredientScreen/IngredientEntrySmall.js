import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function IngredientEntrySmall(props) {
  const { ingredient, onSelect } = props;

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1,
        padding: 8,
        backgroundColor: "white",
      }}
      onPress={onSelect}
    >
      <Text>{ingredient.name}</Text>
    </TouchableOpacity>
  );
}
