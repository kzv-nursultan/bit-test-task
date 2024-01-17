import { Stack, styled } from "@mui/material";
import { CompanyName, Logo, UserInfo } from "../../entities";

const Container = styled("div")(({ theme }) => ({
  borderRadius: "17px",
  backgroundColor: theme.colors.baseBg,
  padding: "16px 24px",
  width: "100%",
  boxSizing: "border-box",
}));

const FlexContainer = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 44,
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

const InnerFlexContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 44,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "space-between",
    gap: 0,
  },
}));

export const Header = () => {
  return (
    <Container>
      <FlexContainer justifyContent="space-between" sx={{ flexWrap: "wrap" }}>
        <InnerFlexContainer>
          <Logo />
          <CompanyName />
        </InnerFlexContainer>
        <UserInfo />
      </FlexContainer>
    </Container>
  );
};
