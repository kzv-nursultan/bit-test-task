import { ThemeProvider, Typography, styled } from "@mui/material";
import { theme } from "../shared/configs/materialUI";

const HeaderContainer = styled("div")(() => ({
  borderRadius: "17px",
  backgroundColor: "121825",
  padding: "16px 24px"
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <Typography>hello</Typography>
      </HeaderContainer>
    </ThemeProvider>
  );
}

export default App;
