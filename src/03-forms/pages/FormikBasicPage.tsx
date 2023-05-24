export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="firstName" />
        <span>First name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="lastName" />
        <span>Last name is required</span>

        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder="email" />
        <span>Email is required</span>
        <span>Check for an valid email format</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
