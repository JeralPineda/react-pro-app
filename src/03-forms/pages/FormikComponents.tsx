import { Field, Form, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener un máximo de 15 caracteres')
            .required('El nombre es requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener un máximo de 15 caracteres')
            .required('El apellido es requerido'),
          email: Yup.string()
            .email('El email no tiene un formato valido')
            .required('El correo es requerido'),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
