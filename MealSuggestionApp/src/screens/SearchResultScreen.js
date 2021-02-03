import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Carousel from 'react-native-snap-carousel'

/**
 * Displays list of recipes which match the given ingredients and filters
 * @param {*} props
 */



export default function SearchResultScreen(props) {
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image src={require('../../assets/Recipe_Props_Gulasch.jpg')}/>
          <Text>{item.title}</Text>
      </View>
    );
  }
 
  const [carouselItems, setCarouselItems] = useState([
    {title: "Item 1"},
    {title: "Item 2"},
    {title: "Item 3"},
    {title: "Item 4"}
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
