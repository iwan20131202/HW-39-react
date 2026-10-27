import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Notice = styled.p`
  padding: 10px 14px;
  font-size: 14px;
  color: ${({ $error }) => ($error ? "var(--danger)" : "var(--muted)")};
  background: ${({ $error }) => ($error ? "var(--danger-soft)" : "transparent")};
  border-radius: 10px;
`;
