import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: ${({ $fullPage }) => ($fullPage ? "30vh 0" : "24px 0")};
  color: var(--muted);
`;

export const Spinner = styled.span`
  width: 22px;
  height: 22px;
  border: 3px solid var(--primary-soft);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
