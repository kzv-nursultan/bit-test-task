import { ThemeProvider } from "@mui/material";
import { theme } from "../shared/configs/materialUI";
import { UsersList } from "../pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UsersList />
    </ThemeProvider>
  );
}

export default App;
