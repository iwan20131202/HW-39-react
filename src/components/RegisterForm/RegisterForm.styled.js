import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormError = styled.p`
  padding: 10px 14px;
  font-size: 14px;
  color: var(--danger);
  background: var(--danger-soft);
  border-radius: 10px;
`;
