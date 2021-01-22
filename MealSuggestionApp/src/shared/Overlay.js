import React from "react";
import { View } from "react-native";

export default function Overlay(props) {
  return (
    <View
      style={[
        {
          position: "absolute",
          zIndex: 1000,
          width: "100%",
          height: "100%",
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}
