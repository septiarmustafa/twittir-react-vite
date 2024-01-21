import React, { useState } from 'react'
import '../style/Login.css'
import logo from '../assets/images/Twittir.png'
import { useDispatch } from "react-redux";
import { add } from "../redux/UsersSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleLogin = (e) => {
        if (!username.trim()) {
            setErrorMessage("Please enter your username");
            return;
        }

        fetch("https://jsonplaceholder.typicode.com/users?username=" + username)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    dispatch(add(data[0]));
                    setErrorMessage("");
                    navigate("/home");
                } else {
                    setErrorMessage("Username not found ");
                }
            })
            .catch((error) => {
                setErrorMessage("Username not found ", error);
            });
    };
    return (
        <>
            <section className="vh-100 custom-section">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src={logo}
                                className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 text-center">
                            <p className="mb-4" htmlFor="form1Example13" style={{ fontSize: '40px', fontWeight: '900' }}>Login now</p>
                            <div
                                className="form-outline form-white mb-2 needs-validation"
                                noValidate
                            >
                                <label className="form-label" htmlFor="username" style={{ fontSize: '20px' }}>Username</label>
                                <div className="form-outline mb-4">
                                    <input type="text" id="username" className={`form-control form-control-lg ${errorMessage && "is-invalid"
                                        }`}
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => handleUsername(e)}
                                        required style={{ backgroundColor: 'black', color: 'white'}}
                                    />
                                    <div
                                        className="invalid-feedback"
                                        style={{ fontSize: "20px", color: "red" }}
                                    >
                                        {errorMessage}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around align-items-center mb-4">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>


                                <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ fontWeight: '500', width: '100%', borderRadius: '60px' }} onClick={(e) => handleLogin()}>
                                    Sign in
                                </button>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">OR</p>
                                </div>

                                <a className="btn btn-primary btn-lg btn-block p-2 m-2" style={{ backgroundColor: 'white', borderRadius: '60px', color: 'black', width: '100%' }} href="#!"
                                    role="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16" style={{ margin: '0 10px 5px 0' }}>
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                    </svg>Continue with Google
                                </a>
                                <a className="btn btn-primary btn-lg btn-block p-2 m-2" style={{ backgroundColor: 'white', borderRadius: '60px', color: 'black', width: '100%' }} href="#!"
                                    role="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-apple align-items-center" viewBox="0 0 16 16" style={{ margin: '0 10px 5px 0' }}>
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                    </svg>
                                    Continue with Apple
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login