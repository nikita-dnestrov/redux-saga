import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure } from './users.actions';
import { FETCH_USERS_REQUEST } from './actionTypes';
import { IUser } from './users.types';

const getUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users');
};

function* fetchUsers() {
  try {
    const response: IUser[] = yield axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.data.map((user: any) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
          };
        });
      });
    yield put(fetchUsersSuccess(response));
  } catch (e) {
    //@ts-ignore
    yield put(fetchUsersFailure({ error: e.message }));
  }
}

function* usersSaga() {
  yield all([takeLatest(FETCH_USERS_REQUEST, fetchUsers)]);
}

export default usersSaga;
