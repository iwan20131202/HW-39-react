import { useId } from "react";
import PropTypes from "prop-types";

import { Field, Label, Input, ErrorText } from "./FormField.styled";

export const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}) => {
  const id = useId();

  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        $invalid={Boolean(error)}
      />
      {error && <ErrorText role="alert">{error}</ErrorText>}
    </Field>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "tel"]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
};
