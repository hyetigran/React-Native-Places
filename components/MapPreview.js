import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import ENV from "../env";

const MapPreview = (props) => {
  let imagePreviewUrl;
  if (props.location) {
    imagePreviewUrl = `url?center=${props.location.lat}, ${props.location.lng}?markers=color:red${props.location.lat},${props.location.lat}&key=%${ENV.googleApiKey}`;
  }
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {imagePreviewUrl ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapReview;
