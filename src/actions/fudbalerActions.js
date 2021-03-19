import axios from "axios";
import {
  GET_ERRORS,
  GET_FUDBALER,
  GET_FUDBALERI,
  DELETE_FUDBALER,
  GET_FUDBALER_ID,
} from "./types";

export const createFudbaler = (fudbaler, history) => async (dispatch) => {
  try {
    await axios.post("/api/fudbaler", fudbaler);
    history.push("/fudbaler");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getFudbaleri = () => async (dispatch) => {
  const res = await axios.get("/api/fudbaler/all");
  dispatch({
    type: GET_FUDBALERI,
    payload: res.data,
  });
};

export const getFudbaler = (jmbg, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/fudbaler/${jmbg}`);
    dispatch({
      type: GET_FUDBALER,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const getFudbalerId = (id, history) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.get(`/api/fudbaler/id/${id}`);
    dispatch({
      type: GET_FUDBALER_ID,
      payload: res.data,
    });
  } catch (error) {
    // history.push("/dashboard");
  }
};

export const deleteFudbaler = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`/api/fudbaler/id/${id}`);
    dispatch({
      type: DELETE_FUDBALER,
      payload: id,
    });
  }
};
