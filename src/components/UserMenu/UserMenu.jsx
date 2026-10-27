import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button/Button";

import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import { Wrapper, Email } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Email title={user.name || undefined}>{user.email}</Email>
      <Button variant="ghost" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
