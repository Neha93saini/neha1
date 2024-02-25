import React from 'react'
import { useField, ErrorMessage } from 'formik'


export const TextField = ({ label, ...props }) => {

  const [meta, field] = useField(props)
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props}></input>
      <ErrorMessage component="div" name={field.name} />

    </div>
  )
}
