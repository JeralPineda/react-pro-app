import { Field, Form, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
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
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('El jobType es requerido'),
        })}
      >
        {() => (
          <Form noValidate>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Jeral"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Pineda"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="correo@google.com"
            />

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Términos y condiciones
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
