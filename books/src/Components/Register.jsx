import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const {register, handleSubmit, watch, reset, formState: { errors }, } = useForm();
  const password = watch("password");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const formSubmitHandler = (data) => {
    console.log(data);
    setIsSubmitSuccessful(true);
    reset();
  };

  return (
    <div className="form-container">
      <fieldset>
        <legend>Registration Form</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>

          {/* Success Message */}
          {isSubmitSuccessful && (
            <div className="success">
              <p>Registration Successful! ✅</p>
            </div>
          )}

          <input type="text" name="firstName" placeholder="Your Name"
            {...register("firstName", { required: "Enter your name!", minLength: { value: 3, message: "Minimum 3 characters required!",}, maxLength: { value: 30, message: "Max 30 characters required!",},})}/>
          {errors.firstName && <p className="err">{errors.firstName.message}</p>}
          <br />

          <input type="email" name="email" placeholder="Your E-Mail" {...register("email", { required: "Email Required!", pattern: { value: /^[^\s@]+@[^\s@]+$/, message: "Invalid Email!",},})}/>
          {errors.email && <p className="err">{errors.email.message}</p>}
          <br />

          <input type="password" name="password" placeholder="Your password" {...register("password", { required: "Fill Password!", minLength: { value: 10, message: "Minimum 10 characters required and 1 special character required!",},pattern: { value: /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/, message: "Password must contain at least one special character.", },})}/>
          {errors.password && <p className="err">{errors.password.message}</p>}
          <br />

          <input type="password" name="confirmPassword" placeholder="Re-type your password" {...register("confirmPassword", { required: "Retype your password!",validate: (value) => value === password || "Passwords do not match!",})}/> {errors.confirmPassword && ( <p className="err">{errors.confirmPassword.message}</p>)}
          <br />

          <div className="checkbox">
            <input type="checkbox" {...register("terms", { required: true })} />
            <span>I Agree to all statements in Terms of Service.</span>
          </div>
          <br />

          <input type="submit" value={"Register"} id="register-btn" disabled={ !watch("terms") || Object.keys(errors).length !== 0 || !Object.values(watch()).every(val => val !== "") } title={ !watch("terms") ? "Please agree to terms!" : "Please fill all the form fields!" } className={ !watch("terms") || Object.keys(errors).length !== 0 || !Object.values(watch()).every(val => val !== "") ? "disabled" : ""}/>
        </form>
      </fieldset>
    </div>
  );
};

export default Register;
