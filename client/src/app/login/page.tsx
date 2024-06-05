/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../_utils";
import { useRouter } from "next/navigation";
import { UserContext } from "../_contexts/UserContext";
import "dotenv/config";

export default function Page() {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleLog = (e: any) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/login`, values)
      .then((res) => {
        if (res.status === 200) {
          router.push("/search");
          setUser(res.data);
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
  };

  return (
    <>
      <main className="form-container">
        <h1>Welcome back .!</h1>
        <div className="right-side">
          <div className="greeting-container">
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
          </div>
        </div>
      </main>
    </>
  );
}
