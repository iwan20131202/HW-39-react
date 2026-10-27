import PropTypes from "prop-types";

import { LoaderWrapper, Spinner } from "./Loader.styled";

export const Loader = ({ label = "Loading...", fullPage = false }) => (
  <LoaderWrapper $fullPage={fullPage} role="status">
    <Spinner aria-hidden="true" />
    <span>{label}</span>
  </LoaderWrapper>
);

Loader.propTypes = {
  label: PropTypes.string,
  fullPage: PropTypes.bool,
};
