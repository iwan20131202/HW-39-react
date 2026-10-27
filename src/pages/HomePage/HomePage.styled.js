import styled from "styled-components";
import { Link } from "react-router-dom";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 64px 24px;
  text-align: center;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Title = styled.h1`
  font-size: clamp(28px, 5vw, 44px);
  line-height: 1.15;
`;

export const Accent = styled.span`
  color: var(--primary);
`;

export const Description = styled.p`
  max-width: 520px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--muted);
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const CtaLink = styled(Link)`
  padding: 12px 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $primary }) => ($primary ? "#fff" : "var(--primary)")};
  background: ${({ $primary }) => ($primary ? "var(--primary)" : "transparent")};
  border: 1px solid ${({ $primary }) => ($primary ? "var(--primary)" : "var(--border)")};
  border-radius: 10px;
  transition: background 0.15s;

  &:hover {
    background: ${({ $primary }) => ($primary ? "var(--primary-dark)" : "var(--primary-soft)")};
  }
`;
