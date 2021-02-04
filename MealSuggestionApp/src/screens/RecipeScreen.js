import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";

const itemScale = 1;

/**
 * Detailed description and manual for a selected recipe
 * @param {*} props
 */
export default function RecipeScreen(props) {
  const { navigation } = props;
  const [currentIndex, setCurrentIndex] = useState(navigation.getParam("currentIndex"));
  const carouselItems = navigation.getParam("recipes");
  const carousel = useRef();

  const screenWidth = Dimensions.get("window").width;

  const renderIngredient = (item) => {
    return (
      <View key={item.name}>
        <Text style={{ width: "90%" }}>
          {item.name + ": " + item.amount + " " + item.unit}
        </Text>
      </View>
    );
  }

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "white",
      }}>
        <ScrollView>
          <View style={{ padding: 8 }}>
            <View>
              <ImageBackground
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignSelf: 'center',
                  height: 250,
                  width: "100%",
                }}
                source={item.path}
                resizeMode="cover"
              >
                <LinearGradient
                  colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  style={{
                    alignSelf: "flex-end",
                    width: "100%",
                    paddingTop: 40
                  }}>
                  <Text
                    style={{
                      fontSize: 40,
                      color: "white",
                      fontWeight: "bold",
                      margin: 10
                    }}>{item.title}</Text>
                </LinearGradient>
              </ImageBackground>
            </View>

            {item.ingredients.map(ingredient => renderIngredient(ingredient))}
            <Text style={{ marginVertical: 30 }}>
              {item.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Carousel
        ref={carousel}
        layout={'tinder'}
        layoutCardOffset={18}
        style={{ backgroundColor: "#000" }}
        firstItem={currentIndex}
        data={carouselItems}
        sliderWidth={screenWidth}
        itemWidth={itemScale * screenWidth}
        renderItem={_renderItem}
        keyExtractor={(item) => item.title}
        onSnapToItem={(index) => setCurrentIndex(index)}
        contentContainerCustomStyle={{
          backgroundColor: "#424444"
        }}
      />

      <Pagination
        dotsLength={carouselItems.length}
        carouselRef={carousel}
        activeDotIndex={currentIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        dotContainerStyle={{
          padding: 10,
          margin: 0,
        }}
        containerStyle={{
          padding: 0,
          marginTop: 0,
          width: "100%",
          position: "absolute",
          bottom: -20,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        delayPressInDot={0}
      />

    </SafeAreaView>



  );
}
