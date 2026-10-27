import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";

import { logIn } from "../../redux/auth/operations";
import { clearAuthError } from "../../redux/auth/slice";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";

import { Form, FormError } from "./LoginForm.styled";

const validate = ({ email, password }) => {
  const errors = {};

  if (!email.trim()) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  return errors;
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (authError) dispatch(clearAuthError());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    dispatch(logIn({ email: values.email.trim(), password: values.password }));
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="email"
        placeholder="mango@mail.com"
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
        autoComplete="current-password"
      />

      {authError && <FormError role="alert">{authError}</FormError>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Log In"}
      </Button>
    </Form>
  );
};
