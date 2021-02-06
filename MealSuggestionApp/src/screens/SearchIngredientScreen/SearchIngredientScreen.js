import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { useState } from "react/cjs/react.development";

/**
 * Little search engine to search ingredients by name
 * @param {*} props
 */
export default function SearchIngredientScreen(props) {
  const [searchText, setSearchText] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SearchBar
        placeholder="Search Ingredient..."
        onChangeText={setSearchText}
        value={searchText}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
}
