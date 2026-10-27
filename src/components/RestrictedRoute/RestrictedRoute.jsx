import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

// Публічний маршрут: залогіненого користувача відправляє на redirectTo
export const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
