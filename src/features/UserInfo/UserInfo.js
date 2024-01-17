import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const TokensUsage = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "26px",
}));

export const UserInfo = ({ id }) => {
  return (
    <Stack gap={"20px"}>
      <TokensUsage>Использование токенов</TokensUsage>
    </Stack>
  );
};

UserInfo.propTypes = {
  id: PropTypes.string.isRequired,
};
