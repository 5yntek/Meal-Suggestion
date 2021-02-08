import React, { useEffect, useRef } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import IngredientEntry from "./IngredientEntry";
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";
import Colors from "../../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { selectSelectedIngredients } from "../../../redux/ingredient.selector";
import {
  removeSelectedIngredient,
  setSelectedIngredients,
} from "../../../redux/ingredients.action";

const fabs = [
  {
    text: "Take picture to add ingredients",
    name: "cam",
    icon: <Ionicons name="camera" color="white" />,
    position: 1,
    color: Colors.green,
  },
  {
    text: "Search ingredient",
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
function IngredientSelectionScreen(props) {
  const { navigation, selectedIngredients, removeSelectedIngredient } = props;
  const fab = useRef();

  useEffect(() => {
    if (selectedIngredients.length === 0)
      fab.current.animateButton();
  }, [navigation]);

  const deleteItem = (id) => {
    removeSelectedIngredient(id);
  };

  const renderItem = ({ item, index }) => {
    return (
      <IngredientEntry ingredient={item} deleteItem={deleteItem} key={index} />
    );
  };

  const goToRecipes = () => {
    navigation.navigate("SearchResult");
  };

  const onAddIngredientPressed = (buttonName) => {
    if (buttonName === "cam") addByCamera();
    else if (buttonName === "search") addBySearch();
  };

  const addByCamera = () => {
    navigation.navigate("Camera");
  };

  const addBySearch = () => {
    navigation.navigate("SearchIngredient");
  };

  const renderList = () => {
    return <>
      <FlatList
        style={{ width: "100%", marginHorizontal: 10 }}
        data={selectedIngredients}
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
    </>
  }

  const renderPlaceholder = () => {
    return <Text>Click on the + to add ingredients!</Text>
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light,
      }}
    >
      {selectedIngredients.length == 0 ? renderPlaceholder() : renderList()}
      <FloatingAction
        ref={fab}
        actions={fabs}
        color={Colors.green}
        onPressItem={onAddIngredientPressed}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  selectedIngredients: selectSelectedIngredients(state),
});
const mapDispatchToProps = (dispatch) => {
  return {
    removeSelectedIngredient: (ingredient) =>
      dispatch(removeSelectedIngredient(ingredient)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientSelectionScreen);
