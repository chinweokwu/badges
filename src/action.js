import axios from "axios";
import USER from "./constants";

export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get("data.json");
    console.log(json);
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};
