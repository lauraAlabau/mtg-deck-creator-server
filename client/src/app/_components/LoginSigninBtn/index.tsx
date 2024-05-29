import Link from "next/link";
import "./styles.css";

type BtnProps = {
  buttonType: "login" | "signin";
};
export const LoginSigninBtn = ({ buttonType }: BtnProps) => {
  const button =
    buttonType === "login" ? (
      <>
        <p>Already have an account ?</p>
        <Link href="/login">
          <button className="btn btn-login">Login</button>
        </Link>
      </>
    ) : (
      <>
        <p>Don’t have an account ? </p>

        <Link href="/signin" className="btn btn-signin">
          <button className="btn btn-signin">Sign In</button>
        </Link>
      </>
    );
  return button;
};
