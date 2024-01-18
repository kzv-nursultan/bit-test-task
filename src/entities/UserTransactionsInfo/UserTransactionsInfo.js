import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import { Chart } from "./ui/Chart";
import { TransactionsTable } from "./ui/TransactionsTable";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchUserTransactions } from "./api/fetchUserTransactions";

const Titles = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "26px",
}));

export const UserTransactionsInfo = ({ id, email }) => {
  const { data } = useQuery({
    queryKey: ["userTransactions", id],
    queryFn: () => fetchUserTransactions(id),
    placeholderData: keepPreviousData,
  });

  return (
    <Box sx={{ overflowY: "scroll", overflowX: "hidden" }}>
      <Stack gap={"20px"}>
        <Titles>Использование токенов</Titles>
        <Chart data={data || []} email={email || ""} />
        <Divider sx={{ backgroundColor: "#222B44", mt: "20px" }} />
        <Titles>История операций</Titles>
        <TransactionsTable data={data || []} />
      </Stack>
    </Box>
  );
};

UserTransactionsInfo.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
