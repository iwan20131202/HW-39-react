import { useSelector } from "react-redux";

import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { Header, HeaderInner } from "./AppBar.styled";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <HeaderInner>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderInner>
    </Header>
  );
};
