import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import MapPreview from "../components/MapPreview";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

const PlaceDetailScreen = (props) => {
  const placeId = props.navigation.getParam("placeId");
  const selectedPlace = useSelector((state) =>
    state.places.places.find((place) => place.id === placeId)
  );
  const selectedLocation = { lat: selectedPlace.lat, lng: selectedPlace.lng };

  const showMapHandler = () => {
    props.navigation.navigate("Map", {
      readonly: true,
      initialLocation: selectedLocation,
    });
  };
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image style={styles.image} source={{ uri: selectedPlace.imageUri }} />
      <View style={styles.container}>
        <View style={styles.address}>
          <Text style={styles.text}>{selectedPlace.address}</Text>
        </View>
        <MapPreview
          style={styles.map}
          onPress={showMapHandler}
          location={selectedLocation}
        />
      </View>
    </ScrollView>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle"),
  };
};
const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  container: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  address: {
    padding: 20,
  },
  text: {
    color: Colors.primary,
    textAlign: "center",
  },
  map: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default PlaceDetailScreen;
