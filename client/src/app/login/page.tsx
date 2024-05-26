/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../_utils";

export default function Page() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleLog = (e: any) => {
    e.preventDefault();

    console.log("values", values);

    console.log("Form submitted successfully");
    axios
      .post(`${BASE_URL}/auth/login`, values)
      .then((res) => console.log({ res }))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="form-container">
      <h1>Welcome back .!</h1>
      <form className="form" onSubmit={handleLog}>
        <h2>Log in your account</h2>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            placeholder="email@email.com"
            autoComplete="off"
            onChange={handleChange}
            name="email"
          />
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
            name="password"
          />
        </div>
        <button className="form-btn">Log in</button>
      </form>
      <p>
        Don't have an account ? <Link href="/signin">Sign in</Link>
      </p>
    </main>
  );
}
