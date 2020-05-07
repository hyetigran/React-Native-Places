import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlacesScreen from "../screens/NewPlacesScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlacesScreen,
    Map: MapScreen,
  },
  {
    defaultNavigatoinOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
