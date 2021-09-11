import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from '../../actionTypes';

export const addUser = createAction(actionTypes.addUser);
export const removeUser = createAction(actionTypes.removeUser);
export const changeRole = createAction(actionTypes.changeRole);
