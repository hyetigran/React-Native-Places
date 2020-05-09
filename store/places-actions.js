import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";
import { inserPlace, fetchPlaces } from "../helpers/db";
import ENV from "../env";

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(`googlegeocodingreverseUrl`);
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const resData = await response.json();
    if (!resData.results) {
      throw new Error("Something went wrong");
    }
    const address = resData.results[0].formatted_address;

    try {
      await FileSystem.moveAsync({ from: image, to: newPath });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
          address: address,
          coords: {
            lat: location.lat,
            lng: location.lng,
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = fetchPlaces();
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (error) {
      console.log(error);
      throw err;
    }
  };
};
