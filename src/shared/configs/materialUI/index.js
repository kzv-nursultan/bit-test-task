import { createTheme } from "@mui/material";

export const theme = createTheme({
  colors: {
    base: "#0E0C15",
    grayScale: "#121825",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'IBM Plex Sans', sans-serif",
        boxSizing: "border-box",
        color: "#FFF",
      },
    },
  },
});