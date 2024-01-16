import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledBtn = styled(Button, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ current, theme }) => ({
  padding: "6px 14px",
  borderRadius: 8,
  backgroundColor: current ? "#1C64F2" : "transparent",
  color: "#FFF",
  minWidth: "38px",
  fontFamily: "'IBM Plex Sans', sans-serif",
  "&:hover": {
    backgroundColor: theme.colors.grayBorder,
  },
}));

export const NumberedBtn = ({ value, active, onClick }) => {
  return (
    <StyledBtn current={active} onClick={onClick}>
      {value}
    </StyledBtn>
  );
};

NumberedBtn.propTypes = {
  value: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
