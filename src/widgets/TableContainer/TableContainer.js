import { Box, Table, TableBody, styled, useTheme } from "@mui/material";
import { TableHeader, Title, UsersListRow } from "../../entities";
import { SearchBar, TablePagination } from "../../features";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchUsers } from "./api/fetchUsers";
import { UseDebounce } from "../../shared/hooks/useDebounce";
import { TOKENS_ORDER } from "../../shared/consts/enums";

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
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState(TOKENS_ORDER.desc);
  const [page, setPage] = useState(1);

  const { data: users } = useQuery({
    queryKey: ["usersList", page, UseDebounce(search), orderBy],
    queryFn: () => fetchUsers(page, search, orderBy),
    placeholderData: keepPreviousData,
  });

  const onSearchChange = (e) => setSearch(e.target.value);
  const changeSortOrder = () =>
    setOrderBy((prev) =>
      prev === TOKENS_ORDER.asc ? TOKENS_ORDER.desc : TOKENS_ORDER.asc
    );

  return (
    <Container>
      <Title title="Моя организация" wrapperProps={wrapperBorder(theme)} />
      <Title title="Пользователи" />
      <SearchBar value={search} onChange={onSearchChange} />
      <Box sx={{ padding: "24px 34px" }}>
        <Table aria-label="users list table">
          <TableHeader
            row={tableHeader}
            setOrder={changeSortOrder}
            order={orderBy}
          />
          <TableBody>
            {users?.data.map((user) => (
              <UsersListRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          page={page}
          setPage={setPage}
          totalPages={users?.pages || 0}
        />
      </Box>
    </Container>
  );
};
