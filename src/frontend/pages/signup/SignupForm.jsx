import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login/LoginForm";
import { useAuthContext } from "../../contexts";
import { authActions } from "../../reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm() {
	const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
	const { authState, authDispatch } = useAuthContext();
	let navigate = useNavigate();
	const { user, error } = authState;
	const { firstName, lastName, email, password } = user;

	const signupHandler = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(`/api/auth/signup`, {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			});
			localStorage.setItem("token", response.data.encodedToken);
			authDispatch({
				type: authActions.TOKEN,
				payload: response.data.encodedToken,
			});
			navigate("/");
			toast.success("Singup  Successfull ", {
				position: "top-right",
				autoClose: 1000,
			});
		} catch (error) {
			if (error.response.status === 422) {
				toast.error("Email Already Exists", {
					position: "top-center",
					autoClose: 2000,
				});
			} else {
				toast.error("Server Error", {
					position: "top-center",
					autoClose: 2000,
				});
			}
		}
	};

	return (
		<div>
			<main className="signup__container">
				<div className="signup__div">
					<form className="form" onSubmit={signupHandler}>
						<h2 className="form__name">Signup</h2>
						<div className="input__box">
							<label htmlFor="Email">
								Email address
								<input
									id="Email"
									className="input"
									type="email"
									required
									onChange={(e) =>
										authDispatch({
											type: authActions.EMAIL,
											payload: e.target.value,
										})
									}
								/>
							</label>
							<p className="input__message">Wrong Email</p>
						</div>
						<div className="input__box">
							<label htmlFor="firstName">
								First Name
								<input
									id="firstName"
									className="input"
									required
									onChange={(e) =>
										authDispatch({
											type: authActions.FIRST_NAME,
											payload: e.target.value,
										})
									}
								/>
							</label>
						</div>
						<div className="input__box">
							<label htmlFor="lastName">
								Last Name
								<input
									id="lastName"
									className="input"
									required
									onChange={(e) =>
										authDispatch({
											type: authActions.LAST_NAME,
											payload: e.target.value,
										})
									}
								/>
							</label>
						</div>
						<div className="input__box">
							<label htmlFor="Password">
								Password
								<input
									id="Password"
									className="input"
									required
									onChange={(e) =>
										authDispatch({
											type: authActions.PASSWORD,
											payload: e.target.value,
										})
									}
									type={`${isPasswordVisibile ? "text" : "password"}`}
									autoComplete="on"
								/>
								<span className="password__icon">
									<i
										className={`${
											isPasswordVisibile ? "fas fa-eye" : "fas fa-eye-slash"
										}`}
										onClick={() =>
											setIsPasswordVisibile(
												(isPasswordVisibile) => !isPasswordVisibile
											)
										}
									></i>
								</span>
							</label>
							<p className="input__message">Wrong Password</p>
						</div>
						<div className="input__box input__TandC">
							<div>
								<input type="checkbox" id="TandC" />
								<label htmlFor="TandC">I accept all Terms and Conditions</label>
							</div>
						</div>
						<button type="submit" className="btn btn-primary form-btn">
							Create New Account
						</button>
						<Link to="/Login" className="btn-secondary">
							Already have an Account 👉
						</Link>
					</form>
				</div>
			</main>
		</div>
	);
}

export { SignupForm };
