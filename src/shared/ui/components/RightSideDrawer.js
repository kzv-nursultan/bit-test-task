import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

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
});

const RightSideDrawer = ({ open, onClose, children }) => {
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
        },
      }}
    >
      <Container>{children}</Container>
    </StyledDialog>
  );
};

RightSideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default RightSideDrawer;
