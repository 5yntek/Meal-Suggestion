import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import { View, Text , SafeAreaView, Image} from "react-native";
import { FlatList } from "react-native-gesture-handler";
=======
import { View, Text, SafeAreaView, Image } from "react-native";
>>>>>>> 92ac29ab0d4e4925295d36415e6cb62d2adb3e16
import Carousel from 'react-native-snap-carousel'

/**
 * Detailed description and manual for a selected recipe
 * @param {*} props
 */
export default function RecipeScreen(props) {
<<<<<<< HEAD
  const renderIngredient = ({item, index}) => {
    return(
      <View>
        <Text style={{width: "90%"}}>
          {item.name + ": " + item.amount + item.unit}
        </Text>
      </View>
    );
  }

  const _renderItem = ({item, index}) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "#66CCFF",}}>
          
        <Image 
=======
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDF6F9",
      }}>

        <Image
>>>>>>> 92ac29ab0d4e4925295d36415e6cb62d2adb3e16
          style={{
            alignSelf: 'center',
            height: 150,
            width: "100%",
            borderWidth: 1,
            borderRadius: 5
          }}
          source={item.path}
<<<<<<< HEAD
          resizeMode="cover"   
          />
        <Text
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 30
          }}>
          {item.title}
        </Text>
        <FlatList
          style={{ width: "100%", margin: 10 }}
          data={item.ingredients}
          renderItem={renderIngredient}
          keyExtractor={(item) => item.id}
        /> 
=======
          resizeMode="stretch"
        />
        <Text>{item.title}</Text>
>>>>>>> 92ac29ab0d4e4925295d36415e6cb62d2adb3e16
      </View>
    );
  }

<<<<<<< HEAD
 
  const [carouselItems, setCarouselItems] = useState([
    {title: "Gulasch mit Tütensuppe", 
    path: require('../../assets/Recipe_Props_Gulasch.jpg'), 
    ingredients: [{name: "Rinderfilet", unit: "g", amount: 560}, 
                  {name: "Wasser", unit: "ml", amount: 1000}]
    },
    {title: "Kaiserschmarrn", path: require('../../assets/Recipe_Props_Kaiserschmarrn.jpg'), ingredients: [{name: "Eier", unit: "", amount: 3}, 
                                                                                                            {name: "Milch", unit: "l", amount: 500}]},
    {title: "Pizza", path: require('../../assets/Recipe_Props_Pizza.jpg')},
    {title: "Schnitzel", path: require('../../assets/Recipe_Props_Schnitzel.jpg')},
    {title: "Halber Keks", path: require('../../assets/Recipe_Props_Halber_Keks.jpeg')}
=======
  const [carouselItems, setCarouselItems] = useState([
    { title: "Gulasch", path: require('../../assets/Recipe_Props_Gulasch.jpg') },
    { title: "Kaiserschmarrn", path: require('../../assets/Recipe_Props_Kaiserschmarrn.jpg') },
    { title: "Pizza", path: require('../../assets/Recipe_Props_Pizza.jpg') },
    { title: "Schnitzel", path: require('../../assets/Recipe_Props_Schnitzel.jpg') }
>>>>>>> 92ac29ab0d4e4925295d36415e6cb62d2adb3e16
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDF6F9",
      }}
    >
<<<<<<< HEAD
    <Carousel
      data = {carouselItems}
      sliderWidth={350}
      itemWidth={250}
      renderItem = {_renderItem}
      
    />
      
=======
      <Carousel
        data={carouselItems}
        sliderWidth={250}
        itemWidth={250}
        renderItem={_renderItem}

      />

>>>>>>> 92ac29ab0d4e4925295d36415e6cb62d2adb3e16
    </SafeAreaView>



  );
}
