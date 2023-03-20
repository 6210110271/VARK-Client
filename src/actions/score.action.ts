import {
    OK,
    SCORE_FAILED,
    SCORE_FETCHING,
    SCORE_SUCCESS,
    server,
    TOKEN,
    LOGOUT,
    SCORE_CLEAR,
    USER_ID,
  } from "../Constants";
  import { httpClient } from "../utils/httpclient";

import { ScoreState } from "../reducers/score.reducer";
import { Add_score, Score } from "../types/score.type";
  
  export const setScoreFetchingToState = () => ({
    type: SCORE_FETCHING,
  });
  
  export const setScoreSuccessToState = (payload: Score[]) => ({
    type: SCORE_SUCCESS,
    payload,
  });
  
  export const setScoreFailedToState = () => ({
    type: SCORE_FAILED,
  });
  
  export const setAccountClearToState = () => ({
    type: SCORE_CLEAR,
  });

  export const loadScore = () => {
    return (dispatch: any) => {
      dispatch(setScoreFetchingToState());
      doGetScore(dispatch);
    };
  };

  
  const doGetScore = async (dispatch: any) => {
    try {
      const result = await httpClient.get<Score[]>(server.SCORE_URL);
      dispatch(setScoreSuccessToState(result.data));
    } catch (error) {
      dispatch(setScoreFailedToState());
    }
  };

  export const addScore = (data: Add_score,navigate: any) => {
    return async (dispatch: any) => {
      await httpClient.post(server.SCORE_ADD_URL, data);
        await doGetScore(dispatch);
        navigate("/games")
    };
  };

  export const loadCount = () => {
    return (dispatch: any) => {
      dispatch(setScoreFetchingToState());
      doGetScoreByUserId(dispatch);
    };
  };

   const doGetScoreByUserId = async (dispatch: any) => {
    try {
      let userId = localStorage.getItem(USER_ID);

      const result = await httpClient.get<any>(`${server.SCORE_USER_URL}/${userId}`);
      console.log(result.data);
      
      dispatch(setScoreSuccessToState(result.data));
    } catch (error) {
      dispatch(setScoreFailedToState());
    }
  };

