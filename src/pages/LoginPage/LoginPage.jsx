import { LoginForm } from "../../components/LoginForm/LoginForm";

import { Card, Title, Hint, HintLink } from "./LoginPage.styled";

export default function LoginPage() {
  return (
    <Card>
      <Title>Welcome back</Title>
      <LoginForm />
      <Hint>
        No account yet? <HintLink to="/register">Register</HintLink>
      </Hint>
    </Card>
  );
}
