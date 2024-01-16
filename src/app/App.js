import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../shared/configs/materialUI";
import { UsersList } from "../pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UsersList />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
