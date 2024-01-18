import { Box, InputAdornment, TextField, styled } from "@mui/material";
import PropTypes from "prop-types";
import { Magnifier } from "../../shared/ui";

const Container = styled(Box)(({ theme }) => ({
  padding: "0 34px",
  [theme.breakpoints.down("md")]: {
    padding: "0 24px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  border: `1px solid ${theme.colors.grayBorder}`,
  borderRadius: 8,
  boxSizing: "border-box",
  input: {
    color: "#FFF",
    padding: "14px 16px 14px 0",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
    "&:-webkit-autofill": {
      WebkitTextFillColor: "#FFFF",
      WebkitBackgroundClip: "text",
    },
  },
  "& .MuiOutlinedInput-root": {
    paddingLeft: 16,
  },
  "& .MuiInputAdornment-root": {
    marginRight: 10,
  },
  "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
    color: theme.colors.grayText,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
  },
}));

export const SearchBar = ({ value = "", onChange }) => {
  return (
    <Container>
      <StyledInput
        id="searchInput"
        fullWidth
        placeholder="Поиск"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Magnifier />
            </InputAdornment>
          ),
        }}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
