import PropTypes from "prop-types";

import { StyledButton } from "./Button.styled";

export const Button = ({
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  children,
}) => (
  <StyledButton
    type={type}
    $variant={variant}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["primary", "ghost", "danger"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
