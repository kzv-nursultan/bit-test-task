import { Box, Stack, Typography, styled } from "@mui/material";
import { Profile } from "../../shared/ui";
import PropTypes from "prop-types";

const Container = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.colors.grayBorder}`,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "8px 14px",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Authorized = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px",
  color: theme.colors.grayText,
}));

const User = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "18px",
}));

export const UserInfo = ({ user = "Администратор" }) => (
  <Container>
    <Profile />
    <Stack>
      <Authorized>Вы авторизованы</Authorized>
      <User>{user}</User>
    </Stack>
  </Container>
);

UserInfo.propTypes = {
  user: PropTypes.string,
};
