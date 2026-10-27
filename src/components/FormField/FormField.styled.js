import styled from "styled-components";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 11px 14px;
  font: inherit;
  color: var(--text);
  background: #fff;
  border: 1px solid ${({ $invalid }) => ($invalid ? "var(--danger)" : "var(--border)")};
  border-radius: 10px;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &::placeholder {
    color: #a3a7c2;
  }

  &:focus {
    outline: none;
    border-color: ${({ $invalid }) => ($invalid ? "var(--danger)" : "var(--primary)")};
    box-shadow: 0 0 0 3px
      ${({ $invalid }) => ($invalid ? "var(--danger-soft)" : "var(--primary-soft)")};
  }
`;

export const ErrorText = styled.span`
  font-size: 13px;
  color: var(--danger);
`;
