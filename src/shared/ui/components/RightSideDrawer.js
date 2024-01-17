import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { Close, StackRow } from "../";
import { useTheme } from "@emotion/react";

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-container": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
}));

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100%",
  boxSizing: "border-box",
  overflow: "unset",
  gap: 20,
});

const CloseBtn = styled(IconButton)(() => ({
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "26px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

const RightSideDrawer = ({ open, onClose, children, title = "" }) => {
  const theme = useTheme();
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          padding: "56px 40px 56px 20px",
          width: "100%",
          maxWidth: "470px",
          boxSizing: "border-box",
          margin: 0,
          overflow: "unset",
          display: "flex",
          minHeight: "100%",
          backgroundColor: "#121825",
          [theme.breakpoints.down("sm")]: {
            padding: "30px 16px",
          },
        },
      }}
    >
      <Container>
        <StackRow>
          <HeaderTitle>{title}</HeaderTitle>
          <CloseBtn onClick={onClose}>
            <Close />
          </CloseBtn>
        </StackRow>
        {children}
      </Container>
    </StyledDialog>
  );
};

RightSideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default RightSideDrawer;
