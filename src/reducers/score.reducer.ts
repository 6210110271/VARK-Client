import {
    SCORE_CLEAR,
    SCORE_FAILED,
    SCORE_FETCHING,
    SCORE_SUCCESS,
  } from "../Constants";
import { Score } from "../types/score.type";
  
  export interface ScoreState {
    result: any;
    isFetching: boolean;
    isError: boolean;
  }
  
  const initialState: ScoreState = {
    result: [],
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }: any) => {
    switch (type) {
      case SCORE_FETCHING:
        return { ...state, result: [], isFetching: true, isError: false };
      case SCORE_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case SCORE_FAILED:
        return { ...state, result: [], isFetching: false, isError: true };
      case SCORE_CLEAR:
        return { ...state, result: [], isFetching: false, isError: false };
      default:
        return state;
    }
  };
  