import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { signIn } from "../reducers/authReducer";

export interface SignInFormFields {
  email: string;
  password: string;
}

interface UseSignInForm {
  initialValues: SignInFormFields;
  validationSchema: Yup.ObjectSchema;
  handleSubmit: (input: SignInFormFields) => void;
}

export default function useSignInForm(): UseSignInForm {
  const dispatch = useDispatch();
  const initialValues: SignInFormFields = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    // email: Yup.string().email().required(),
    // password: Yup.string()
    //   // .matches(lowercaseRegex, "One lowercase required")
    //   // .matches(uppercaseRegex, "One uppercase required")
    //   // .matches(numericRegex, "One numeric required")
    // .min(2)
    //   .max(50)
    // .required(),
  });

  async function handleSubmit(input: SignInFormFields) {
    dispatch(signIn(input));
  }

  return { initialValues, validationSchema, handleSubmit };
}
