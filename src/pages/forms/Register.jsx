import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

export default function Register() {
  const [userName, setUserName]= useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword]= useState("");

  function submitForm(e) {
    e.preventDefault();
    if (userName.trim() === "") {
      toast.error("Username is Required");
    }
    if (email.trim() === "") {
      toast.error("Email is Required");
    }
    if (password.trim() === "") {
      toast.error("Password is Required");
    }
    if (confirmPassword.trim() === "") {
      toast.error("Confirm Password is Required");
    }
    if(password !== confirmPassword && confirmPassword !== "") {
        toast.warning("Confirm Password Is Wrong");
    }
    if (userName.trim() !== "" && email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "") {
        if (password.trim() === confirmPassword.trim()) {
            toast.success("From Submitted");
            console.log({ userName, email, password, confirmPassword });
        }
    }
  }
  return (
    <div className="parent">
      <ToastContainer theme="colored" />
      <div className="overlay">
        <form onSubmit={submitForm}>
          <input
            onInput={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            value={userName}
            placeholder="Username"
          />
          <input
            onInput={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
          />
          <input
            onInput={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
          <input
            onInput={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirm password"
            value={confirmPassword}
            placeholder="Confirm Password"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}