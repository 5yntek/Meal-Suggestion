import React, { useEffect } from "react";
import { ActivityIndicator, View, Text, ImageBackground } from "react-native";
import { useState } from "react/cjs/react.development";
import Colors from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import { setKnownIngredients } from "../../../redux/ingredients.action";
import { selectKnownIngredients } from "../../../redux/ingredient.selector";
import { getRandomBackground } from "../../utils/BackgroundLibrary";

const status = {
  FETCH_INGREDIENTS: 2,
  NO_CONNECTION: 3,
};

function LoadingScreen(props) {
  const [currentStatus, setCurrentStatus] = useState();
  const [isLoading, setIsLoading] = useState();
  const { navigation, setKnownIngredients } = props;

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = () => {
    setCurrentStatus("Fetching Ingredients...");
    setIsLoading(true);
    fetch("http://briskled.de:7010/ingredients")
      .catch((error) => {
        setCurrentStatus("Error while fetching ingredients: " + error);
        setIsLoading(false);
      })
      .then((data) => {
        if (data.status === 200) return data.json();
        else {
          setCurrentStatus("Error while fetching ingredients: " + error);
          setIsLoading(false);
        }
      })
      .then((json) => {
        setKnownIngredients(json);
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
      });
  };

  const renderIcon = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color={Colors.beige} style={{
        marginBottom: 20
      }} />
    ) : (
        <Ionicons name="alert-circle-outline" size={50} color={Colors.red} />
      );
  };

  return (
    <ImageBackground
      source={getRandomBackground()}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
    >
      <View style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        flex: 1,
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}>
        {renderIcon()}
        <Text style={{

          color: "white"
        }}>{currentStatus}</Text>
        {!isLoading && (
          <TouchableOpacity onPress={fetchIngredients}>
            <Text
              style={{
                backgroundColor: Colors.green,
                padding: 5,
                color: "white"
              }}
            >
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setKnownIngredients: (ingredients) =>
      dispatch(setKnownIngredients(ingredients)),
  };
};
export default connect(null, mapDispatchToProps)(LoadingScreen);
