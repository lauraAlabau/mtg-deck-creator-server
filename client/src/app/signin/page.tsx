"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Validation from "../_utils";
import axios from "axios";
import { useRouter } from "next/navigation";

export type FormInputs = {
  name: string;
  email: string;
  password: string;
};
export default function Page() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = Validation(values);
    setErrors(errs);

    if (!errors.name || !errors.email || !errors.password) {
      console.log("Form submitted successfully");
      axios
        .post("", values)
        .then((res) => {
          if (res.status === 200) {
            router.push("/search");
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log(
              "Error msg:",
              `${err.response.status} - ${err.response.data}`
            );
          }
        });
    }
  };

  return (
    <main className="form-container">
      <h1>Join the tribe .!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Username:
          </label>
          <input
            type="text"
            placeholder="John"
            autoComplete="off"
            onChange={handleChange}
          />
          {!!errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            placeholder="email@email.com"
            autoComplete="off"
            onChange={handleChange}
          />
          {!!errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            placeholder="******"
            autoComplete="off"
            onChange={handleChange}
          />
          {!!errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className="form-btn">Signup</button>
        <p>
          Already have an account ? <Link href="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}
