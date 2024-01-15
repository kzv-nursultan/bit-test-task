import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { Magnifier } from "../../shared/ui";

const Container = styled(Box)(() => ({
  padding: "0 34px",
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

export const SearchBar = () => {
  return (
    <Container>
      <StyledInput
        fullWidth
        placeholder="Поиск"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Magnifier />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};
