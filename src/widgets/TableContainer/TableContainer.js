import { Box, styled, useTheme } from "@mui/material";
import { Title } from "../../entities";

const Container = styled(Box)(({ theme }) => ({
  borderRadius: 18,
  backgroundColor: theme.colors.baseBg,
}));

export const TableContainer = () => {
  const theme = useTheme();
  return (
    <Container>
      <Title
        title="Моя организация"
        wrapperProps={{
          sx: {
            borderBottom: `1px solid ${theme.colors.grayBorder}`,
          },
        }}
      />
      <Title title="Пользователи" />
    </Container>
  );
};
