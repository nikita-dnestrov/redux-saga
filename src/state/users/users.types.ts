import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';

export interface IUser {
  id: number;
  name: String;
  email: String;
  phone: String;
}

export interface IState {
  users: IUser[];
  pending: boolean;
  error: string | null;
}

export interface FetchUsersSuccessPayload {
  users: IUser[];
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface FetchUsersRequest {
  type: typeof FETCH_USERS_REQUEST;
}

export type FetchUsersSuccess = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: IUser[];
};

export type FetchUsersFailure = {
  type: typeof FETCH_USERS_FAILURE;
  payload: FetchUsersFailurePayload;
};

export type UsersActions = FetchUsersRequest | FetchUsersSuccess | FetchUsersFailure;
