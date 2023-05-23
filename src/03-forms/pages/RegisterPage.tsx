import '../styles/styles.css';

export const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>

      <form>
        <input type="text" placeholder="Name" name="name" />

        <input type="email" placeholder="email" name="email" />

        <input type="password" placeholder="password" name="password" />

        <input type="password" placeholder="Repeat Password" name="password2" />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
