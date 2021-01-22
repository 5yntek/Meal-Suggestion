import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function IngredientEntry(props) {
  const { ingredient, deleteItem } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "#000",
        elevation: 3,
        alignItems: "center",
      }}
    >
      <Text>{ingredient.title}</Text>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFDDD2",
          borderRadius: 50,
          padding: 3,
        }}
        onPress={() => deleteItem(ingredient.id)}
      >
        <Ionicons name="remove" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
}
