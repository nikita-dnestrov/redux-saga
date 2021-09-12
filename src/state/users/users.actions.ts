import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';
import {
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersFailure,
  FetchUsersFailurePayload,
  IUser,
} from './users.types';

// export const fetchUsers = createAction(FETCH_USERS_REQUEST);
// export const fetchUsersSuccess = createAction<IUser[]>(usersActionTypes.fetchUsersSuccess);
// export const fetchUsersFailure = createAction<{ error: string }>(usersActionTypes.fetchUsersFailure);
// export const addUser = createAction<IUser>(usersActionTypes.addUser);
// export const removeUser = createAction(usersActionTypes.removeUser);
// export const changeRole = createAction(usersActionTypes.changeRole);

export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (payload: IUser[]): FetchUsersSuccess => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (payload: FetchUsersFailurePayload): FetchUsersFailure => ({
  type: FETCH_USERS_FAILURE,
  payload,
});
