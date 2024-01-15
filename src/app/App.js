import { ThemeProvider } from "@mui/material";
import { theme } from "../shared/configs/materialUI";
import { Header } from "../widgets";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
