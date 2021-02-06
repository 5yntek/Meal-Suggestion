import React, { useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Platform,
  Alert,
  Button,
} from "react-native";
import { useState } from "react/cjs/react.development";
import Colors from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions, StackActions } from "react-navigation";

const status = {
  FETCH_INGREDIENTS: 2,
  NO_CONNECTION: 3,
};

function LoadingScreen(props) {
  const [currentStatus, setCurrentStatus] = useState();
  const [isLoading, setIsLoading] = useState();
  const { navigation } = props;

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = () => {
    setCurrentStatus("Fetching Ingredients...");
    setIsLoading(true);
    fetch("http://192.168.178.106:7010/ingredients", {
      method: "POST",
    })
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
        navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: "IngredientSelection",
                params: { allIngredients: json },
              }),
            ],
          })
        );
      });
  };

  const renderIcon = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color={Colors.red} />
    ) : (
      <Ionicons name="alert-circle-outline" size={50} color={Colors.red} />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.beige,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        {renderIcon()}
        <Text>{currentStatus}</Text>
        {!isLoading && (
          <TouchableOpacity onPress={fetchIngredients}>
            <Text
              style={{
                backgroundColor: Colors.green,
                padding: 5,
              }}
            >
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default LoadingScreen;
