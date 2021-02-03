import React from "react";
import { useState } from "react";
import { View, Text , SafeAreaView, Image, ScrollView} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Carousel from 'react-native-snap-carousel'

/**
 * Detailed description and manual for a selected recipe
 * @param {*} props
 */
export default function RecipeScreen(props) {
  const { navigation } = props;
  const carouselItems = navigation.getParam("recipes")

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
        backgroundColor: "#696969",}}>
          
        <Image 
          style={{
            alignSelf: 'center',
            height: 150,
            width: "100%",
            borderWidth: 1,
            borderRadius: 5
          }}
          source={item.path}
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
        <ScrollView
          style={{ width: "90%", borderRadius: 5, margin: 10 , backgroundColor: "#d3d3d3"}}>
          <FlatList
            style={{margin: 10}}
            data={item.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(item) => item.title}
          /> 
          <Text
          style={{margin: 10}}>
            {item.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

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
      firstItem={navigation.getParam("currentIndex")}
      data = {carouselItems}
      sliderWidth={350}
      itemWidth={250}
      renderItem = {_renderItem}
      
    />
      
    </SafeAreaView>



  );
}
