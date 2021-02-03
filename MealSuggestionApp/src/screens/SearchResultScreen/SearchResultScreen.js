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
    {title: "Gulasch mit Tütensuppe", 
    path: require('../../../assets/Recipe_Props_Gulasch.jpg'), 
    ingredients: [{name: "Rinderfilet", unit: "g", amount: 560}, 
                  {name: "Wasser", unit: "ml", amount: 1000}],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {title: "Kaiserschmarrn", 
    path: require('../../../assets/Recipe_Props_Kaiserschmarrn.jpg'), 
    ingredients: [{name: "Eier", unit: "", amount: 3}, 
                  {name: "Milch", unit: "l", amount: 500}],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {title: "Pizza", 
    path: require('../../../assets/Recipe_Props_Pizza.jpg'), 
    ingredients: [{name: "Tomaten", unit: "Stück", amount: 3}, 
                  {name: "Teig", unit: "Stück", amount: 1}],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {title: "Schnitzel", 
    path: require('../../../assets/Recipe_Props_Schnitzel.jpg'), 
    ingredients: [{name: "Fleisch", unit: "g", amount: 500}, 
                  {name: "Pommes", unit: "Stück", amount: 3}],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {title: "Halber Keks", 
    path: require('../../../assets/Recipe_Props_Halber_Keks.jpeg'), 
    ingredients: [{name: "Haferflocken", unit: "", amount: 0.5}, 
                  {name: "Gebäck", unit: "", amount: 0.5}],
    description: "hallo"
    }
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
