import React, { useState, useEffect, FC } from 'react';
import { useAppDispatch } from '../state/hooks';
import axios from 'axios';

interface IProps {}

export const UserForm: FC<IProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);
  const dispatch = useAppDispatch();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: 'ADD_USER',
  //     payload: { name, email, phone },
  //   });
  // };
  interface IUser {
    id: number;
    name: String;
    email: String;
    phone: String;
  }

  useEffect(() => {
    const call = () => {
      axios
        .get<IUser>('https://jsonplaceholder.typicode.com/users')
        .then((i) => console.log(i));
      // kek.then((res) => {
      //   const kok = res.data.map((user: any) => {
      //     return {
      //       id: user.id,
      //       name: user.name,
      //       email: user.email,
      //       phone: user.phone,
      //     };
      //   });
      //   setUsers(kok);
      // });
    };
    call();
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => console.log(e)}
        style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
      >
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
        />
        <button type="submit">Добавить юзера</button>
      </form>
      <div></div>
    </div>
  );
};
