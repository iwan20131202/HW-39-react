import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

import { Card, Title, Hint, HintLink } from "./RegisterPage.styled";

export default function RegisterPage() {
  return (
    <Card>
      <Title>Create account</Title>
      <RegisterForm />
      <Hint>
        Already registered? <HintLink to="/login">Log in</HintLink>
      </Hint>
    </Card>
  );
}
