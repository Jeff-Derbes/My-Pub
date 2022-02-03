import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuthContext();
  const { error, login } = useLogin();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login ">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login__container">
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="login__textBox"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="login__textBox"
          />
        </label>
        <button className="login__btn">log in</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
