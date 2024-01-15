import { Box, styled } from "@mui/material"

const Container = styled(Box)(() => ({
  padding: "34px 25px",
  display: "flex",
  gap: 34,
  flexDirection: "column",
}));

export const Layout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
