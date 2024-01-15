import { createTheme } from "@mui/material";

export const theme = createTheme({
  colors: {
    body: "#0E0C15",
    baseBg: "#121825",
    grayBorder: "#222B44",
    grayText: "#616D8D",
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