import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../../shared/SearchBar";
import { useState } from "react/cjs/react.development";
import { FlatList } from "react-native-gesture-handler";
import IngredientEntrySmall from "./IngredientEntrySmall";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import { selectKnownIngredients } from "../../../redux/ingredient.selector";
import {
  addSelectedIngredient,
  setSelectedIngredients,
} from "../../../redux/ingredients.action";

/**
 * Little search engine to search ingredients by name
 * @param {*} props
 */
function SearchIngredientScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { navigation, knownIngredients, addSelectedIngredient } = props;

  const onSearchTextChanged = (value) => {
    setSearchText(value);
    setSearchResult(
      value
        ? knownIngredients.filter((i) =>
            i.name.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const onSelectIngredient = (ingredient) => {
    addSelectedIngredient(ingredient);
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "IngredientSelection",
          }),
        ],
      })
    );
  };

  const renderSearchResult = ({ item, index }) => {
    return (
      <IngredientEntrySmall
        ingredient={item}
        key={index}
        onSelect={() => onSelectIngredient(item)}
      />
    );
  };

  const renderContent = () => {
    if (searchResult && searchResult.length > 0)
      return (
        <FlatList
          style={{
            borderTopWidth: 1,
            borderTopColor: "#cccccc",
            marginVertical: 10,
            width: "100%",
          }}
          data={searchResult}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id + ""}
        />
      );
    else
      return (
        <Text
          style={{
            color: "#777777",
            marginTop: 50,
          }}
        >
          No ingredient found
        </Text>
      );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
      }}
    >
      <SearchBar
        value={searchText}
        onValueChanged={onSearchTextChanged}
        placeholder="Search Ingredient"
      />
      {renderContent()}
    </View>
  );
}

const mapStateToProps = (state) => ({
  knownIngredients: selectKnownIngredients(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedIngredient: (ingredient) =>
      dispatch(addSelectedIngredient(ingredient)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIngredientScreen);
