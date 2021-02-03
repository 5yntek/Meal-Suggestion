import React from "react";
import { useState } from "react";
import { View, Text, FlatList, SafeAreaView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from 'react-native-snap-carousel'

/**
 * Displays list of recipes which match the given ingredients and filters
 * @param {*} props
 */

const ITEM_HEIGHT = 80;

export default function SearchResultScreen(props) {
  const { navigation } = props;

  const [recipes, setRecipes] = useState([
    { title: "Gulasch", path: require('../../../assets/Recipe_Props_Gulasch.jpg') },
    { title: "Kaiserschmarrn", path: require('../../../assets/Recipe_Props_Kaiserschmarrn.jpg') },
    { title: "Pizza", path: require('../../../assets/Recipe_Props_Pizza.jpg') },
    { title: "Schnitzel", path: require('../../../assets/Recipe_Props_Schnitzel.jpg') }
  ]);

  const openRecipe = (index) => {
    navigation.navigate("Recipe", { currentIndex: index, recipes: recipes });
  }

  const renderItem = ({ item, index }) => {
    return <TouchableOpacity onPress={() => openRecipe(index)}>
      <View style={{
        width: "100%",
        borderRadius: 6,
        flex: 1,
        flexDirection: "row",
        height: ITEM_HEIGHT,
        marginTop: 5,
        backgroundColor: "white",
      }}
      >
        <Image source={item.path} style={{
          height: "100%",
          width: ITEM_HEIGHT,
          aspectRatio: 1,
        }}
          resizeMode="cover" />
        <View style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: 10,
          flexGrow: 1
        }}>
          <Text style={{
            borderBottomColor: "#eeeeee",
            borderBottomWidth: 1,
            fontSize: 20,
          }}>
            {item.title}
          </Text>
          <Text>Ist sehr lecker</Text>
        </View>

      </View >

    </TouchableOpacity>
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDF6F9",
        padding: 5,
      }}
    >
      <FlatList
        style={{ width: "100%", margin: 10 }}
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />

    </SafeAreaView>



  );
}
