import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserForm } from './components/UserForm';
import { User } from './components/User';
import { fetchUsersRequest } from './state/users/users.actions';
import { useAppSelector, useAppDispatch } from './state/hooks';

function App() {
  const [users, setUsers] = useState([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  useEffect(() => {
    const call = () => {
      const kek = axios.get('https://jsonplaceholder.typicode.com/users');
      kek.then((res) => {
        const kok = res.data.map((user: any) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
          };
        });
        setUsers(kok);
      });
    };
    call();
  }, []);

  const mapUsers = users.map(({ id, name, email, phone }) => (
    <User key={id} name={name} email={email} phone={phone} />
  ));

  return (
    <div className="App">
      <UserForm />
      {mapUsers}
    </div>
  );
}

export default App;
