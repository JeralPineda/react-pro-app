/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;

  //Comodín para que acepte cualquier cantidad de propiedades
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
