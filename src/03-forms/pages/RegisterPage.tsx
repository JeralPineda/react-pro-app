import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const { formData, name, email, password1, password2, onChange } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form onSubmit={onSubmit}>
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
