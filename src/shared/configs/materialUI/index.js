import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
  colors: {
    body: "#0E0C15",
    baseBg: "#121825",
    grayBorder: "#222B44",
    grayText: "#616D8D",
    grayTableText: "#9CA3AF",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'IBM Plex Sans', sans-serif",
        boxSizing: "border-box",
        color: "#FFF",
        fontStyle: "normal",
      },
    },
  },
});