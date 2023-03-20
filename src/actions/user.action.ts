import {
  OK,
  USER_FAILED,
  USER_FETCHING,
  USER_SUCCESS,
  server,
  USER_CLEAR,
} from "../Constants";
import { httpClient } from "../utils/httpclient";

import { User } from "../types/user.type";
import { AnyAction, Dispatch } from "redux";

export const setUserFetchingToState = () => ({
  type: USER_FETCHING,
});

export const setUserSuccessToState = (payload: User[]) => ({
  type: USER_SUCCESS,
  payload,
});

export const setUserFailedToState = () => ({
  type: USER_FAILED,
});

export const setAccountClearToState = () => ({
  type: USER_CLEAR,
});

export const loadUser = () => {
  return (dispatch: any) => {
    dispatch(setUserFetchingToState());
    doGetUser(dispatch);
  };
};


const doGetUser = async (dispatch: any) => {
  try {
    const result = await httpClient.get<User[]>(server.USER_URL);
    dispatch(setUserSuccessToState(result.data));
  } catch (error) {
    dispatch(setUserFailedToState());
  }
};

export const deleteUser = (userId: number) => {

  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setUserFetchingToState());
    await httpClient.delete(`${server.USER_DELETE_URL}/${userId}`);
    if (userId) {
      await doGetUser(dispatch);

    }
  };
}

