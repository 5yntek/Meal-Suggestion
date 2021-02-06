import React, { useEffect } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import IngredientEntry from "./IngredientEntry";
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";
import Colors from "../../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const fabs = [
  {
    text: "From Camera",
    name: "cam",
    icon: <Ionicons name="camera" color="white" />,
    position: 1,
    color: Colors.green,
  },
  {
    text: "Search Ingredient",
    name: "search",
    icon: <Ionicons name="search" color="white" />,
    position: 2,
    color: Colors.green,
  },
];

/**
 * Screen with a list of all selected ingredients. Allows to add and remove ingredients
 * @param {*} props
 */
export default function IngredientSelectionScreen(props) {
  const { navigation } = props;

  const [ingredients, setIngredients] = useState([]);
  const [knownIngredients, setKnownIngredients] = useState([]);

  useEffect(() => {
    const ings = navigation.getParam("ingredients");
    if (ings) {
      setIngredients(distinct([...ingredients, ...ings]));
    }

    const known = navigation.getParam("knownIngredients");
    if (known) {
      setKnownIngredients(known);
    }
  }, [navigation]);

  const distinct = (arr) => {
    return [...new Set(arr)];
  };

  const deleteItem = (id) => {
    setIngredients(ingredients.filter((item) => item.id !== id));
  };

  const renderItem = ({ item, index }) => {
    return (
      <IngredientEntry ingredient={item} deleteItem={deleteItem} key={index} />
    );
  };

  const goToRecipes = () => {
    navigation.navigate("SearchResult", { ingredients: ingredients });
  };

  const onAddIngredientPressed = (buttonName) => {
    if (buttonName === "cam") addByCamera();
    else if (buttonName === "search") addBySearch();
  };

  const addByCamera = () => {
    navigation.navigate("Camera");
  };

  const addBySearch = () => {
    navigation.navigate("SearchIngredient", {
      knownIngredients: knownIngredients,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.beige,
      }}
    >
      <FlatList
        style={{ width: "100%", marginHorizontal: 10 }}
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ""}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          width: "100%",
          backgroundColor: Colors.green,
          padding: 10,
        }}
        title="Search recipes"
        onPress={goToRecipes}
      >
        <Text>Search Recipes</Text>
      </TouchableOpacity>
      <FloatingAction
        actions={fabs}
        color={Colors.green}
        onPressItem={onAddIngredientPressed}
      />
    </SafeAreaView>
  );
}
