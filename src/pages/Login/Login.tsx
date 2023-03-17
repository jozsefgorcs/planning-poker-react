import * as React from "react";

import "./Login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface ILoginFormInput {
  email: String;
  password: String;
  firstName: String;
}

type ILoginPageProps = {};

function LoginPage(props: ILoginPageProps) {
  const { register, handleSubmit } = useForm<ILoginFormInput>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data: any) => {
    dispatch(authActions.login(data.email));
    navigate("/home");
  };

  return (
    <div>
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          {...register("email", { required: true })}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          {...register("password", { required: true })}
        />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
