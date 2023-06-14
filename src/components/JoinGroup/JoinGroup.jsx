import "./joinGroup.css";
import {
  Cross,
  facebook,
  google,
  illustration,
  visibility,
} from "../../assets";
import { useState } from "react";

const JoinGroup = () => {
  const [cancle, setCancle] = useState(false);
  const [change, setChange] = useState(false);

  return (
    <>
      {!cancle && (
        <>
          <div className="overlay"></div>
          <div className="cancle" onClick={() => setCancle(!cancle)}>
            <img src={Cross} alt="cross" />
          </div>

          {change ? (
            <>
              <div className="signin-card">
                <div className="prompt">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </div>
                <div className="container">
                  <div className="left">
                    <h1>Sign In</h1>
                    <form>
                      <input type="email" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <button type="submit">Sign In</button>
                    </form>
                    <div className="signUpwith">
                      <div className="facebook">
                        <img src={facebook} alt="facebook" />
                        <p>Sign in with Facebook</p>
                      </div>
                      <div className="google">
                        <img src={google} alt="google" />
                        <p>Sign in with Google</p>
                      </div>
                    </div>
                    <p className="forgot">Forgot Password?</p>
                  </div>
                  <div className="right">
                    <p>
                      Don’t have an account yet?{" "}
                      <span
                        style={{ color: "#2F6CE5", cursor: 'pointer' }}
                        onClick={() => setChange(!change)}
                      >
                        {" "}
                        Create new for free!{" "}
                      </span>
                    </p>
                    <img src={illustration} alt="illustration" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="joinGroup-card">
                <p className="prompt">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </p>
                <div className="container">
                  <div className="left">
                    <h1>Create Account</h1>
                    <form>
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <input type="password" placeholder="Confirm Password" />
                      <button type="submit">Create Account</button>
                      <img src={visibility} alt="visible" />
                    </form>
                    <div className="signUpwith">
                      <div className="facebook">
                        <img src={facebook} alt="facebook" />
                        <p>Sign up with Facebook</p>
                      </div>
                      <div className="google">
                        <img src={google} alt="google" />
                        <p>Sign up with Google</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <p>
                      Already have an account?{" "}
                      <span
                        style={{ color: "#2F6CE5", cursor: "pointer" }}
                        onClick={() => {
                          console.log("Sign in page");
                          setChange(!change);
                        }}
                      >
                        Sign In
                      </span>
                    </p>
                    <img src={illustration} alt="illustration" />
                    <p className="term">
                      By signing up, you agree to our Term & condition, Privacy
                      policy
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default JoinGroup;
