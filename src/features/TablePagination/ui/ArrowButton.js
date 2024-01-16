import React from "react";
import PropTypes from "prop-types";
import { IconButton, styled } from "@mui/material";
import { Arrow } from "../../../shared/ui";

const ArrowBtn = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "rotate",
})(({ rotate }) => ({
  transform: `rotate(${rotate})`,
}));

export const ArrowButton = ({ rotate = "90deg", onClick }) => {
  return (
    <ArrowBtn rotate={rotate} onClick={onClick}>
      <Arrow width={12} height={12} />
    </ArrowBtn>
  );
};

ArrowButton.propTypes = {
  rotate: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
