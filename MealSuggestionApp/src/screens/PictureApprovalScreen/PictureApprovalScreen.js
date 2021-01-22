import { View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Overlay from "../../shared/Overlay";
import { NavigationActions, StackActions } from "react-navigation";

export default function PictureApprovalScreen(props) {
  const { navigation } = props;

  const picture = navigation.getParam("picture");
  const ratio = picture.width / picture.height;

  const ingredients = ["Apple", "Banana", "Strawberry"];

  const handleAcceptPicture = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "IngredientSelection",
            params: { ingredients: ingredients },
          }),
        ],
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "black",
          flexDirection: "column",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: ratio,
          }}
          source={{
            uri: picture.uri,
          }}
        />
      </View>
      <Overlay
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" style={{ color: "#fff", fontSize: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAcceptPicture}>
          <Ionicons name="checkmark" style={{ color: "#fff", fontSize: 40 }} />
        </TouchableOpacity>
      </Overlay>
    </View>
  );
}
