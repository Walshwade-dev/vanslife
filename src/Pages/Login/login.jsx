
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./index.css"

const Login = () => {
    const[loginFormData, setLoginFormData] = useState({email:"", password: ""})

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setLoginFormData(prev => ({...prev, [name]: value}))
    }

    return(
        <div className="login-container lg:pt-[10%] pt-[30%] bg-bkg h-[100vh]">
            <h1 className="lg:text-5xl text-xl font-semibold text-content mb-10">Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form ">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    className="bg-hostUp text-content"
                />

                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    className="bg-hostUp text-content"
                />

                <button>Log in</button>

            </form>
        </div>
    )
}

export default Login