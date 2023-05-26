import { useFormik } from 'formik';

export const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          // onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {/* {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )} */}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          // onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {/* {touched.lastName && errors.lastName && <span>{errors.lastName}</span>} */}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          // onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {/* {touched.email && errors.email && <span>{errors.email}</span>} */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
