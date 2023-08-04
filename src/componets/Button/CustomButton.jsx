import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import "./customButton.css";

function CustomButton({ text }) {
  return <Button className="text">{text}</Button>;
}

export default CustomButton;

CustomButton.PropTypes = {
  text: PropTypes.string.isRequiredf,
};
