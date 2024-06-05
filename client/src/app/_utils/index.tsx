import { FormInputs } from "../signin/page";

import "dotenv/config";

export default function Validation(values: FormInputs) {
  let errors = {
    name: "",
    email: "",
    password: "",
  };

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (!values.name) {
    errors.name = "Name cannot be blank";
  } else {
    errors.name = "";
  }

  if (!values.email) {
    errors.email = "Email cannot be blank";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email";
  } else {
    errors.email = "";
  }

  if (!values.password) {
    errors.password = "password cannot be blank";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Password should contain 1 small char, 1 capital, 1 number and be min 8 char long";
  } else {
    errors.password = "";
  }

  return errors;
}

export const BASE_URL = process.env.DB_REMOTE || "http://localhost:8080";
