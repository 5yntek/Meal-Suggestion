import React from "react";
import { useState } from "react";
import { View, Text , SafeAreaView, Image} from "react-native";
import Carousel from 'react-native-snap-carousel'

/**
 * Detailed description and manual for a selected recipe
 * @param {*} props
 */
export default function RecipeScreen(props) {
  const _renderItem = ({item, index}) => {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDF6F9",}}>

        <Image 
          style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            borderWidth: 1,
            borderRadius: 75
          }}
          source={item.path}
          resizeMode="stretch"
          />
          <Text>{item.title}</Text>
      </View>
    );
  }
 
  const [carouselItems, setCarouselItems] = useState([
    {title: "Gulasch", path: require('../../assets/Recipe_Props_Gulasch.jpg')},
    {title: "Kaiserschmarrn", path: require('../../assets/Recipe_Props_Kaiserschmarrn.jpg')},
    {title: "Pizza", path: require('../../assets/Recipe_Props_Pizza.jpg')},
    {title: "Schnitzel", path: require('../../assets/Recipe_Props_Schnitzel.jpg')}
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
    <Carousel
      data = {carouselItems}
      sliderWidth={250}
      itemWidth={250}
      renderItem = {_renderItem}
      
    />
      
    </SafeAreaView>



  );
}
