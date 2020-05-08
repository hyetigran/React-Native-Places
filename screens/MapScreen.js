import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-nativ-maps";

const PlacesListScreen = (props) => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView region={mapRegion} />;
};
const styles = StyleSheet.create({});
export default PlacesListScreen;
