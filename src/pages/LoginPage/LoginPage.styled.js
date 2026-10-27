import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 440px;
  margin: 24px auto 0;
  padding: 32px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Title = styled.h1`
  font-size: 26px;
`;

export const Hint = styled.p`
  font-size: 14px;
  color: var(--muted);
  text-align: center;
`;

export const HintLink = styled(Link)`
  font-weight: 600;
  color: var(--primary);
`;
