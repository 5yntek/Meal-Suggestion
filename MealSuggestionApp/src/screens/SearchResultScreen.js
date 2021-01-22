import React from "react";
import { View, Text } from "react-native";

/**
 * Displays list of recipes which match the given ingredients and filters
 * @param {*} props
 */
export default function SearchResultScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SearchResultScreen</Text>
    </View>
  );
}
