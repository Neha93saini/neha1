import React from 'react'
import { Formik, Form } from  'formik'
import * as Yup from 'yup'
import { TextField } from './TextField'

const Signup = () => {

    const validate = Yup.object({
        username: Yup.string().max(10," minimum chracters").required("username is rew"),
        password: Yup.string().max(10, " minimum chracters").required("password is rew")
    })
  return (
    <div>
        <Formik
        initialValues={{username: "" , password : ""}}
        validationSchema={validate}
        onSubmit={(values)=>{           
        }}
        >
            {({handleSubmit})=>(
                  <Form onSubmit={handleSubmit}>
                    <TextField type = "text" label = "Username" name = "username" />
                      <TextField type="text" label="Password" name="password" />
                      <button type="submit">Sign Up</button>

                </Form>
            )}

        </Formik>
      
    </div>
  )
}

export default Signup
