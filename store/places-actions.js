import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";
import { inserPlace, fetchPlaces } from "../helpers/db";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({ from: image, to: newPath });
      const dbResult = await insertPlace(title, newPath, "address", 15, 13);
      dispatch({
        type: ADD_PLACE,
        placeData: { id: dbResult.insertId, title: title, image: newPath },
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
