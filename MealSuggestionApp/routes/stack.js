import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IngredientSelectionScreen from "../src/screens/IngredientSelection/IngredientSelectionScreen";
import FiltersScreen from "../src/screens/FiltersScreen";
import RecipeScreen from "../src/screens/RecipeScreen";
import SearchIngredientScreen from "../src/screens/SearchIngredientScreen";
import SearchResultScreen from "../src/screens/SearchResultScreen";
import CameraScreen from "../src/screens/CameraScreen/CameraScreen";
import PictureApprovalScreen from "../src/screens/PictureApprovalScreen/PictureApprovalScreen";

const screens = {
  IngredientSelection: {
    screen: IngredientSelectionScreen,
  },
  Camera: {
    screen: CameraScreen,
  },
  PictureApproval: {
    screen: PictureApprovalScreen,
  },
  Filters: {
    screen: FiltersScreen,
  },
  Recipe: {
    screen: RecipeScreen,
  },
  SearchIngredient: {
    screen: SearchIngredientScreen,
  },
  SearchResult: {
    screen: SearchResultScreen,
  },
};

const Stack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#83C5BE" },
  },
});

/**
 * 006D77
 * 42999B
 * 83C5BE
 * EDF6F9
 * FFDDD2
 */

export default createAppContainer(Stack);
