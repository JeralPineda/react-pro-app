import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
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
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}

        <input
          type="password"
          placeholder="password"
          name="password1"
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length <= 0 && 'has-error'}`}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
          className={`${password2.trim().length <= 0 && 'has-error'}`}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben de ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
