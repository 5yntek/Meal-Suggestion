import React, { useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import IngredientEntry from "./IngredientEntry";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";
import uuid from "react-native-uuid";

const fabs = [
  {
    text: "From Camera",
    name: "cam",
    icon: <Ionicons name="camera" color="white" />,
    position: 1,
    color: "#83C5BE",
  },
  {
    text: "Search",
    name: "search",
    icon: <Ionicons name="search" color="white" />,
    position: 1,
    color: "#83C5BE",
  },
  {
    text: "For Test",
    name: "test",
    icon: <Ionicons name="add" color="white" />,
    position: 1,
    color: "#83C5BE",
  },
];

/**
 * Screen with a list of all selected ingredients. Allows to add and remove ingredients
 * @param {*} props
 */
export default function IngredientSelectionScreen(props) {
  const { navigation } = props;

  const [ingredients, setIngredients] = useState([
    {
      id: "0",
      title: "First Item",
    },
    {
      id: "1",
      title: "Second Item",
    },
    {
      id: "2",
      title: "Third Item",
    },
  ]);

  useEffect(() => {
    const ings = navigation.getParam("ingredients");
    if (ings) {
      setIngredients([
        ...ingredients,
        ings.map((ingredient) => {
          console.log(ingredient);
          return { id: uuid.v1(), title: ingredient };
        }),
      ]);
    }
  }, [navigation]);

  const deleteItem = (id) => {
    setIngredients(ingredients.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => {
    return <IngredientEntry ingredient={item} deleteItem={deleteItem} />;
  };

  const goToRecipe = () => {
    navigation.navigate("Recipe");
  };

  const onAddIngredientPressed = (buttonName) => {
    if (buttonName === "cam") addByCamera();
    else if (buttonName === "search") addBySearch();
    else if (buttonName === "test") {
      setIngredients([
        ...ingredients,
        {
          id: uuid.v1(),
          title: "Item number " + ingredients.length,
        },
      ]);
    }
  };

  const addByCamera = () => {
    navigation.navigate("Camera");
  };

  const addBySearch = () => {
    navigation.navigate("SearchIngredient");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDF6F9",
      }}
    >
      <Button title="Go to recipe" onPress={goToRecipe} />
      <FlatList
        style={{ width: "100%", margin: 10 }}
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FloatingAction
        actions={fabs}
        color="#83C5BE"
        onPressItem={onAddIngredientPressed}
      />
    </SafeAreaView>
  );
}
