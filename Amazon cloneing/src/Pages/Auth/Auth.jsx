import React, { useContext, useState } from "react"; // Importing React and necessary hooks
import classes from "./Auth.module.css";  // Importing CSS module for authentication page styles
import { Link, useNavigate, useLocation } from "react-router-dom"; // Importing routing components
import { auth } from "../../Utility/firebase"; // Importing Firebase authentication instance
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"; // Importing Firebase authentication methods
import { DataContext } from "../../Components/Data Provider/DataProvider"; // Importing context for global state management
import { Type } from "../../Utility/action.type"; // Importing action types for the reducer
import { ClipLoader } from "react-spinners";   // Importing a loading spinner component

function Auth() {
  
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);
// State to track email, password, errors, and loading for sign in/up
  // console.log(user)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });

  // console.log(password, email); ....to check our states

    // Accessing global state (user) and dispatch from context
    const [{ user }, dispatch] = useContext(DataContext);
  // State to track email, password, errors, and loading for sign in/up
  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == "signin") {
      // to sign in existing user

      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      //to signup new user

      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
       {/* Amazon logo */}
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG7.png"
          alt=""
        />
      </Link>
      {/* Form with email and password fields */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {" "}
            {navStateData?.state?.msg}
          </small>
        )}

        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
           {/* Sign In button */}
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign in"}
          </button>
        </form>
         {/* Agreement message */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* Create Account button */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {/* Error message */}
        {error && <small className={classes.auth__error}>{error}</small>}
        
      </div>
    </section>
  );
}

export default Auth;  // Exporting the component for use in other parts of the application