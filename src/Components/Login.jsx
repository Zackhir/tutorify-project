import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { motion } from "framer-motion";

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
            <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
    <div className='flex justify-center'>
          <div className='flex flex-col justify-center items-center rounded-2xl loginPage'>
            <h2>LogIn</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  className='bg-transparent'
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className='bg-transparent'
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">LogIn</button>
            </form>
            <p>Don't have an account</p>
            <Link to={"/signup"}>Register</Link>
          </div>
        </div>
        </motion.section>
  )
}

export default Login