import { ChangeEvent, useState } from 'react';

import '../styles/styles.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { name, email, password1, password2 } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />

        <input
          type="password"
          placeholder="password"
          name="password1"
          value={password1}
          onChange={onChange}
        />

        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
