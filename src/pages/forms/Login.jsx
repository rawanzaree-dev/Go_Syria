import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Email is Required");
    }
    if (password.trim() === "") {
      toast.error("Password is Required");
    }
    if (email.trim() !== "" && password.trim() !== "") {
      toast.success("From Submitted");
      console.log({ email, password });
    }
  }
  return (
    <div className="parent">
      <ToastContainer theme="colored" />
      <div className="overlay">
        <form onSubmit={submitForm}>
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
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
