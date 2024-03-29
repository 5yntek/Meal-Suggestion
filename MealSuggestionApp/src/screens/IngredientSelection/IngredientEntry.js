import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

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
        alignItems: "center",
      }}
      key={ingredient.id}
    >
      <Text>{ingredient.name}</Text>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.orange,
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
