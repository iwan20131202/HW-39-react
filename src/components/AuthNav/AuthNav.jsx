import { Wrapper, AuthLink } from "./AuthNav.styled";

export const AuthNav = () => (
  <Wrapper>
    <AuthLink to="/register">Register</AuthLink>
    <AuthLink to="/login">Log In</AuthLink>
  </Wrapper>
);
