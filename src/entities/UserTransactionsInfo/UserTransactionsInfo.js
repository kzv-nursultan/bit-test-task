import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Chart } from "./ui/Chart";

const Titles = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "26px",
}));

export const UserTransactionsInfo = ({ id }) => {
  return (
    <Stack gap={"20px"}>
      <Titles>Использование токенов</Titles>
      <Chart />
      <Titles mt="20px">История операций</Titles>
    </Stack>
  );
};

UserTransactionsInfo.propTypes = {
  id: PropTypes.string.isRequired,
};
