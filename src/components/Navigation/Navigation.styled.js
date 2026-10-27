import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Brand = styled.span`
  margin-right: 12px;
  font-size: 20px;
  font-weight: 800;
  color: var(--primary);
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 14px;
  font-weight: 600;
  color: var(--muted);
  text-decoration: none;
  border-radius: 10px;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    color: var(--primary);
    background: var(--primary-soft);
  }

  &.active {
    color: var(--primary);
    background: var(--primary-soft);
  }
`;
