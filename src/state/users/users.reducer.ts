import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';
import { IState, UsersActions } from './users.types';

const initState: IState = {
  users: [],
  pending: false,
  error: null,
};

export const usersReducer = (state = initState, action: UsersActions) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, pending: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, pending: false, error: null };
    case FETCH_USERS_FAILURE:
      return { ...state, users: [], pending: false, error: action.payload.error };
    default:
      return { ...state };
  }
};

// export const uReducer = createReducer(initState, (builder) => {
//   builder.addCase(fetchUsers, (state, action) => {
//     state = { ...state, pending: true };
//   });
//   builder.addCase(fetchUsersSuccess, (state, action) => {
//     state = { ...state, users: action.payload, pending: false, error: null };
//   });
//   builder.addCase(fetchUsersFailure, (state, action) => {
//     state = { ...state, users: [], pending: false, error: action.payload.error };
//   });
//   builder.addCase(addUser, (state, action) => {
//     state.users = [...state.users, action.payload];
//   });
// });

// {
//   id: number;
//   name: String;
//   username: String;
//   email: String;
//   address: {
//     street: String;
//     suite: String;
//     city: String;
//     zipcode: String;
//     geo: {
//       lat: String;
//       lng: String;
//     };
//   };
//   phone: String;
//   website: String;
//   company: {
//     name: String;
//     catchPhrase: String;
//     bs: String;
//   };
// }

// {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496',
//     },
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets',
//   },
// },
