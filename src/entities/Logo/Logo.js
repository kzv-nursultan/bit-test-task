import { Box, Typography, styled } from "@mui/material";

const LogoText = styled(Typography)(() => ({
  fontSize: 22,
  fontWeight: 600,
  lineHeight: '29px'
}))

export const Logo = () => (
  <Box sx={{ paddingRight: "26px" }}>
    <LogoText>BitTest</LogoText>
  </Box>
);
