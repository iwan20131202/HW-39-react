import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background: var(--primary);
    color: #fff;
    border-color: var(--primary);

    &:hover:not(:disabled) {
      background: var(--primary-dark);
      border-color: var(--primary-dark);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--primary);
    border-color: var(--border);

    &:hover:not(:disabled) {
      background: var(--primary-soft);
      border-color: var(--primary);
    }
  `,
  danger: css`
    background: var(--danger-soft);
    color: var(--danger);
    border-color: transparent;

    &:hover:not(:disabled) {
      background: var(--danger);
      color: #fff;
    }
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  font: inherit;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;

  ${({ $variant }) => variants[$variant]}

  &:focus-visible {
    outline: 3px solid var(--primary-soft);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
