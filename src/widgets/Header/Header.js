import { Stack, styled } from "@mui/material";
import { CompanyName, Logo, UserInfo } from "../../entities";

const Container = styled("div")(({ theme }) => ({
  borderRadius: "17px",
  backgroundColor: theme.colors.baseBg,
  padding: "16px 24px",
  width: "100%"
}));

const FlexContainer = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 44,
}));

export const Header = () => {
  return (
    <Container>
      <FlexContainer justifyContent="space-between">
        <FlexContainer>
          <Logo />
          <CompanyName />
        </FlexContainer>
        <UserInfo />
      </FlexContainer>
    </Container>
  );
};
