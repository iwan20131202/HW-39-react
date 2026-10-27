import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

// Приватний маршрут: без логіна відправляє на redirectTo
export const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
