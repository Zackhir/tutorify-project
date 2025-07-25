import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result)
        if(result.data ==='Success'){
            navigate('/')
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account</p>
            <Link to={"/signup"}>Register</Link>
          </div>
        </div>
  )
}

export default Login