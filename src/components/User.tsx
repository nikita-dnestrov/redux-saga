import React, { FC } from 'react';

export interface IUser {
  name: String;
  email: String;
  phone: String;
}

export const User: FC<IUser> = ({ name, email, phone }) => {
  return (
    <div style={{ border: 'black 1px solid', marginBottom: '10px' }}>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
  );
};
