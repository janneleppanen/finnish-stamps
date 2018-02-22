import { STAMPS_FETCH_START, STAMPS_FETCH_COMPLETED } from "../actions/types";

const INTIAL_STATE = [];

export default function(state = INTIAL_STATE, { type, payload }) {
  switch (type) {
    case STAMPS_FETCH_START:
      return state;
    case STAMPS_FETCH_COMPLETED:
      return payload;
    default:
      return state;
  }
}
