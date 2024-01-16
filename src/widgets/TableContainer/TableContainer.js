import { Box, Table, TableBody, styled, useTheme } from "@mui/material";
import { TableHeader, Title } from "../../entities";
import { SearchBar } from "../../features";

const Container = styled(Box)(({ theme }) => ({
  borderRadius: 18,
  backgroundColor: theme.colors.baseBg,
}));

const wrapperBorder = (theme) => ({
  sx: {
    borderBottom: `1px solid ${theme.colors.grayBorder}`,
  },
});

const tableHeader = ["Email", "Имя", "Роль", "Подписка", "Токены", "Действия"];

export const TableContainer = () => {
  const theme = useTheme();
  return (
    <Container>
      <Title title="Моя организация" wrapperProps={wrapperBorder(theme)} />
      <Title title="Пользователи" />
      <SearchBar />
      <Box sx={{ padding: "24px 34px" }}>
        <Table aria-label="users list table">
          <TableHeader row={tableHeader} />
          <TableBody>
            
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};
