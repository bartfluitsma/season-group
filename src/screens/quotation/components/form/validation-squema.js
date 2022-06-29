import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  age: Yup.string().required(),
  occupation: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  purpose: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  privacy: Yup.boolean().required('Required'),
  data: Yup.boolean().required('Required'),
})

export default SignupSchema
