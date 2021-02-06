import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useRef } from "react/cjs/react.development";

export default function SearchBar(props) {
  const { placeholder, value, onValueChanged } = props;

  const textField = useRef();

  const renderCloseAll = () => {
    return value ? (
      <TouchableOpacity onPress={() => onValueChanged("")}>
        <Ionicons
          name="close-circle-outline"
          size={22}
          style={{ marginHorizontal: 5 }}
          color="#888888"
        />
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 3,
        alignItems: "center",
        flexGrow: 1,
        padding: 8,
        width: "100%",
      }}
    >
      <Ionicons
        name="search"
        size={20}
        style={{ marginHorizontal: 5 }}
        color="#888888"
      />
      <TextInput
        ref={textField}
        value={value}
        onChangeText={onValueChanged}
        placeholder={placeholder}
        style={{
          flexGrow: 1,
        }}
      />
      {renderCloseAll()}
    </View>
  );
}
