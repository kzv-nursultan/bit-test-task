import { Box, Table, TableBody, styled, useTheme } from "@mui/material";
import { TableHeader, Title } from "../../entities";
import { SearchBar } from "../../features";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchUsers } from "./api/fetchUsers";

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
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("asc");
  const query = useQuery({
    queryKey: ["usersList", page, search, orderBy],
    queryFn: () => fetchUsers(page, search, orderBy),
  });

  console.log(query);
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
