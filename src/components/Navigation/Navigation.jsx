import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { Nav, Brand, StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <Brand>Contacts Book</Brand>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};
