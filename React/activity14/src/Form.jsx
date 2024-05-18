// src/components/Input.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ name, label, type, id, placeholder }) => {
  const { register, errors } = useForm();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, { required: true, maxLength: 30 })}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default Form;
