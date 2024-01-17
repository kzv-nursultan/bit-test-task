import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import PaginationItem from "@mui/material/PaginationItem";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Title } from "../../entities";
import { SearchBar, UserListTableHeader, UsersListRow } from "../../features";
import { useState } from "react";
import { fetchUsers } from "./api/fetchUsers";
import { UseDebounce } from "../../shared/hooks/useDebounce";
import { TOKENS_ORDER } from "../../shared/consts/enums";
import { Arrow } from "../../shared/ui";
import { Container, StyledPagination } from "./ui/styled";
import styled from "@emotion/styled";

const paginationArrow =
  (rotate = "rotate(-90deg)") =>
  () =>
    (
      <Box sx={{ transform: rotate }}>
        <Arrow width={12} height={12} />
      </Box>
    );

const wrapperBorder = (theme) => ({
  sx: {
    borderBottom: `1px solid ${theme.colors.grayBorder}`,
  },
});

const setPaddings = (theme) => ({
  sx: {
    padding: "29px 34px 24px",
    [theme.breakpoints.down("md")]: {
      padding: "29px 24px 27px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "26px 16px",
    },
  },
});

const TableWrapper = styled(Box)(({ theme }) => ({
  padding: "24px 34px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "table",
    tableLayout: "fixed",
    boxSizing: "borderBox",
    padding: "18px 24px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "18px 16px",
  },
}));

export const UsersListTable = () => {
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

  const onPaginationChange = (_, value) => setPage(value);

  return (
    <Container>
      <Title title="Моя организация" wrapperProps={wrapperBorder(theme)} />
      <Title title="Пользователи" wrapperProps={setPaddings(theme)} />
      <SearchBar value={search} onChange={onSearchChange} />
      <Box sx={{ overflow: "auto" }}>
        <TableWrapper>
          <Table aria-label="users list table">
            <UserListTableHeader setOrder={changeSortOrder} order={orderBy} />
            <TableBody>
              {users?.data.map((user) => (
                <UsersListRow key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
          <Box m="24px 34px">
            <StyledPagination
              count={users?.pages}
              page={page}
              onChange={onPaginationChange}
              variant="outlined"
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: paginationArrow("rotate(90deg)"),
                    next: paginationArrow(),
                  }}
                  {...item}
                />
              )}
            />
          </Box>
        </TableWrapper>
      </Box>
    </Container>
  );
};
