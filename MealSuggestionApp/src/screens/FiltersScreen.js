import React from "react";
import { View, Text } from "react-native";

/**
 * Screen for selecting search filters such as time span for cooking, meal type, ...
 * @param {*} props
 */
export default function FiltersScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>FiltersScreen</Text>
    </View>
  );
}
