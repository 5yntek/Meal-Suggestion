import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { selectSelectedIngredients } from "../../../redux/ingredient.selector";
import Colors from "../../utils/Colors";

/**
 * Displays list of recipes which match the given ingredients and filters
 * @param {*} props
 */

const ITEM_HEIGHT = 80;

function SearchResultScreen(props) {
  const { navigation, selectedIngredients } = props;

  const [recipes, setRecipes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    searchRecipes()
      .then((data) => data.json())
      .then((json) => {
        setRecipes(json);
      })
      .then(() => setIsSearching(false));
  }, [navigation]);

  const searchRecipes = () => {
    setIsSearching(true);
    return fetch("http://briskled.de:7010/recipes", {
      method: "POST",
      body: JSON.stringify(selectedIngredients.map((i) => i.id)),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const openRecipe = (index) => {
    navigation.navigate("Recipe", { currentIndex: index, recipes: recipes });
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => openRecipe(index)}>
        <View
          style={{
            width: "100%",
            borderRadius: 6,
            flex: 1,
            flexDirection: "row",
            height: ITEM_HEIGHT,
            marginTop: 5,
            backgroundColor: "white",
          }}
          key={index}
        >
          <Image
            source={{ uri: item.picture }}
            style={{
              height: "100%",
              width: ITEM_HEIGHT,
              aspectRatio: 1,
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              margin: 10,
              flexGrow: 1,
            }}
          >
            <Text
              style={{
                borderBottomColor: "#eeeeee",
                borderBottomWidth: 1,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Text numberOfLines={2} style={{ fontSize: 12 }}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderList = () => {
    return recipes && recipes.length > 1 ? (
      <FlatList
        style={{ width: "100%", margin: 10 }}
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ""}
      />
    ) : (
      <Text>There are no recipes matching your ingredients.</Text>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.beige,
        padding: 5,
      }}
    >
      {isSearching ? (
        <ActivityIndicator size="large" color={Colors.red} />
      ) : (
        renderList()
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  selectedIngredients: selectSelectedIngredients(state),
});
export default connect(mapStateToProps)(SearchResultScreen);
