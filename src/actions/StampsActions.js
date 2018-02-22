import axios from "axios";

import { STAMPS_FETCH_START, STAMPS_FETCH_COMPLETED } from "./types";
import { converStampCSVtoJSON } from "../helpers/CSV";

export const fetchStamps = () => {
  return dispatch => {
    dispatch({
      type: STAMPS_FETCH_START
    });

    axios.get("/data/postimerkit2014.csv").then(res => {
      dispatch({
        type: STAMPS_FETCH_COMPLETED,
        payload: converStampCSVtoJSON(res.data)
      });
    });
  };
};
