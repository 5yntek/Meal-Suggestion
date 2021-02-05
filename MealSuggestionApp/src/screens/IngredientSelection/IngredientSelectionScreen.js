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
    text: "Search",
    name: "search",
    icon: <Ionicons name="search" color="white" />,
    position: 2,
    color: Colors.green,
  },
  {
    text: "For Test",
    name: "test",
    icon: <Ionicons name="add" color="white" />,
    position: 3,
    color: Colors.green,
  },
];

const newIngredientsOrder = ["fluor", "apple", "pea", "banana", "sugar", "tomato", "cheese", "salami", "ham", "garlic", "onion", "lettuce", "egg", "water", "milk"];

/**
 * Screen with a list of all selected ingredients. Allows to add and remove ingredients
 * @param {*} props
 */
export default function IngredientSelectionScreen(props) {
  const { navigation } = props;

  const [ingredients, setIngredients] = useState(newIngredientsOrder.slice(0, 3).map(e => { return { title: e } }));
  const [newIngredientsIndex, setNewIngredientsIndex] = useState(3);

  useEffect(() => {
    const ings = navigation.getParam("ingredients");
    if (ings) {
      setIngredients([
        ...ingredients,
        ings.map((ingredient) => {
          console.log(ingredient);
          return { title: ingredient };
        }),
      ]);
    }
  }, [navigation]);

  const deleteItem = (title) => {
    setIngredients(ingredients.filter((item) => item.title !== title));
  };

  const renderItem = ({ item }) => {
    return <IngredientEntry ingredient={item} deleteItem={deleteItem} />;
  };

  const goToRecipes = () => {
    navigation.navigate("SearchResult");
  };

  const onAddIngredientPressed = (buttonName) => {
    if (buttonName === "cam") addByCamera();
    else if (buttonName === "search") addBySearch();
    else if (buttonName === "test") {
      setIngredients([
        ...ingredients,
        {
          title: newIngredientsOrder[newIngredientsIndex],
        },
      ]);
      setNewIngredientsIndex((newIngredientsIndex + 1) % newIngredientsOrder.length);
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
        backgroundColor: Colors.beige,
      }}
    >
      <FlatList
        style={{ width: "100%", marginHorizontal: 10 }}
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          width: "100%",
          backgroundColor: Colors.green,
          padding: 10
        }}

        title="Search recipes"
        onPress={goToRecipes} >
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
