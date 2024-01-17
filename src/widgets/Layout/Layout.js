import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  padding: "34px 25px",
  display: "flex",
  gap: 34,
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "34px 40px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "24px 0 0 0",
  },
}));

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
