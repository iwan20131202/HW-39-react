import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AuthLink = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  border: 1px solid var(--border);
  border-radius: 10px;
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;

  &:hover {
    background: var(--primary-soft);
    border-color: var(--primary);
  }

  &.active {
    color: #fff;
    background: var(--primary);
    border-color: var(--primary);
  }
`;
