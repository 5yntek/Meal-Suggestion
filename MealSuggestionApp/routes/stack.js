import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IngredientSelectionScreen from "../src/screens/IngredientSelection/IngredientSelectionScreen";
import FiltersScreen from "../src/screens/FiltersScreen";
import RecipeScreen from "../src/screens/RecipeScreen";
import SearchIngredientScreen from "../src/screens/SearchIngredientScreen/SearchIngredientScreen";
import SearchResultScreen from "../src/screens/SearchResultScreen/SearchResultScreen";
import CameraScreen from "../src/screens/CameraScreen/CameraScreen";
import PictureApprovalScreen from "../src/screens/PictureApprovalScreen/PictureApprovalScreen";
import LoadingScreen from "../src/screens/LoadingScreen/LoadingScreen";
import Colors from "../src/utils/Colors";

const screens = {
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  IngredientSelection: {
    screen: IngredientSelectionScreen,
    navigationOptions: {
      title: "Ingredients",
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "transparent",
      },
    },
  },
  PictureApproval: {
    screen: PictureApprovalScreen,
    navigationOptions: {
      title: "Is this picture fine?",
    },
  },
  Filters: {
    screen: FiltersScreen,
    navigationOptions: {
      title: "Filters",
    },
  },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: {
      title: "Recipes",
    },
  },
  SearchIngredient: {
    screen: SearchIngredientScreen,
    navigationOptions: {
      title: "Find by name",
    },
  },
  SearchResult: {
    screen: SearchResultScreen,
    navigationOptions: {
      title: "Recipes",
    },
  },
};

const Stack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.red,
    },
    headerTitleStyle: {
      color: "white",
    },
  },
});

export default createAppContainer(Stack);
