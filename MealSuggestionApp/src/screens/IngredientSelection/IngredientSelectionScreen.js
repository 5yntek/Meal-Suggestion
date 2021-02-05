import React, { useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import IngredientEntry from "./IngredientEntry";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";

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
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
  ]);

  useEffect(() => {
    fetchNStuff();
  }, []);

  const fetchNStuff = () => {
    fetch("http://192.168.178.106:7000/hello/Duda").then((data) =>
      console.log(data)
    );
  };

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

  const deleteItem = (id) => {
    setIngredients(ingredients.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => {
    return <IngredientEntry ingredient={item} deleteItem={deleteItem} />;
  };

  const goToRecipes = () => {
    fetchNStuff();
    navigation.navigate("SearchResult");
  };

  const onAddIngredientPressed = (buttonName) => {
    if (buttonName === "cam") addByCamera();
    else if (buttonName === "search") addBySearch();
    else if (buttonName === "test") {
      setIngredients([
        ...ingredients,
        {
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
      <FlatList
        style={{ width: "100%", margin: 10 }}
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <Button
        style={{
          width: "100%",
        }}
        title="Search recipes"
        onPress={goToRecipes}
      />
      <FloatingAction
        actions={fabs}
        color="#83C5BE"
        onPressItem={onAddIngredientPressed}
      />
    </SafeAreaView>
  );
}
