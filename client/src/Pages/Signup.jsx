/* eslint-disable react/no-unescaped-entities */


// import { useContext, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../_utils";
// import { useRouter } from "next/navigation";
// import { UserContext } from "../_contexts/UserContext";

import "../assets/css/login.css";
import GradientCircle from "../Components/GradientCircle";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Signup = () => {
  // const router = useRouter();
  // const [values, setValues] = useState({
  // name: "",
  //   email: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const { setUser } = useContext(UserContext);
  const handleChange = (event) => {
    console.log(event)
    //   setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Work In Progress')
    // const errs = Validation(values);
    // setErrors(errs);

    // if (!errors.name || !errors.email || !errors.password) {
    //   console.log("Form submitted successfully");
    //   axios
    //     .post("", values)
    //     .then((res) => {
    //       if (res.status === 200) {
    //         router.push("/search");
    //       }
    //     })
    //     .catch((err) => {
    //       if (err.response) {
    //         console.log(
    //           "Error msg:",
    //           `${err.response.status} - ${err.response.data}`
    //         );
    //       }
    //     });
    // }
  };

  return (
    <>
      <Navbar />
      <GradientCircle
        size={"large"}
        color={"blue"}
        alignItems={"align-start"}
        justifyContent={"justify-center"}
      />
      <GradientCircle
        size={"medium"}
        color={"blue"}
        alignItems={"align-end"}
        justifyContent={"justify-end"}
      />
      <div className="bg"></div>
      <main className="container">
        <p className="left-side">Join the tribe!</p>
        <div className="right-side">
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <p className="form-title">Create your account</p>
              <p className="form-summary">Just some details to get you in!</p>
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
                {/* {!!errors.name && <p className="error">{errors.name}</p>} */}
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
                  name="email"
                />
                {/* {!!errors.email && <p className="error">{errors.email}</p>} */}
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
                {/* {!!errors.password && <p className="error">{errors.password}</p>} */}
              </div>
              <button className="btn btn-signin">Sign up</button>
            </form>
            <p className="footer">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
export default Signup