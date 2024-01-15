import { Stack, styled } from "@mui/material";
import { CompanyName, Logo, UserInfo } from "../../entities";

const Container = styled("div")(({ theme }) => ({
  borderRadius: "17px",
  backgroundColor: theme.colors.baseBg,
  padding: "16px 24px",
}));

export const Header = () => {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap="44px">
        <Stack direction="row" alignItems="center" gap={"44px"}>
          <Logo />
          <CompanyName />
        </Stack>
        <UserInfo />
      </Stack>
    </Container>
  );
};
