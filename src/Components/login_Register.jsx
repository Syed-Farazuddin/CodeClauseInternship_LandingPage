import React from "react";

function Login_Register() {
    return (
        <section id="login">
            <div className="background"></div>
            <div className="container">
                <div className="content">
                    <h2 className="logo">SBJ Interiors</h2>
                    <div className="text">
                        <h2>Welcome! <br />
                            <span>To our Website</span>
                        </h2>
                        <p>djfah asdf l osdafjo adsfj sdj askjd jh dasj la lasdfjlsd  l </p>
                        <div className="social-icons"></div>
                    </div>
                </div>
                <div className="logreg-box">
                    <div className="form_box login">
                        <form action="#">
                            <h2>Sign Up</h2>
                            <div className="input_box">
                                <span className="icon">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                            <div className="input_box">
                                <span className="icon">
                                    <i class="fa-solid fa-location-dot"></i>
                                </span>
                                <input type="text" required />
                                <label>Address</label>
                            </div>
                            <div className="input_box">
                                <span className="icon">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <input type="email" required />
                                <label>Email</label>
                            </div>

                            <div className="input_box">
                                <span className="icon">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <input type="password" required />
                                <label>Password</label>
                            </div>

                            <div className="remember-forgot agree">
                                <label>
                                    <input type="checkbox" />I agree all the terms and conditions
                                </label>
                            </div>

                            <button className="button">Sign Up</button>

                            <div className="login-register">
                                <p>Already have an account?
                                    <a href="/" className="register-link"> Sign In</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login_Register;