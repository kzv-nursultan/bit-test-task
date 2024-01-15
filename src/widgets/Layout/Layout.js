import { Box, styled } from "@mui/material"

const Container = styled(Box)(() => ({
  padding: "34px 25px",
  display: "flex",
  gap: 34,
  width: "100%"
}));

export const Layout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
