import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { TextField } from './TextField';

const Login = () => {







  const validate = Yup.object({
    username: Yup.string().max(10, " minimum 10 charctrs are allowed").required(),
    password: Yup.string().max(10, " minimum 10 charctrs are allowed").required()
  })
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validate}
        onSubmit={(value) => {

        }}>
        {({ handleSubmit }) => {
          <Form onSubmit={handleSubmit}>
            <TextField label="username" placeholder=" username" name="username" />
            <TextField label="password" placeholder=" password" name="password" />
            <button type="submit"> sumbit</button>
          </Form>
        }}
      </Formik>
    </div>
  )
}

export default Login
