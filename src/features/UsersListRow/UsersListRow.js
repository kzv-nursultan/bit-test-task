import React, { Suspense, lazy, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { IconButton, Stack } from "@mui/material";
import { Bin, Edit, StyledBodyCell } from "../../shared/ui";
import { UserTransactionsInfo } from "../../entities";

const Drawer = lazy(() => import("../../shared/ui/components/RightSideDrawer"));

const StyledBtn = styled(IconButton)(() => ({
  padding: 0,
}));

const Row = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors.grayBorder,
  },
}));

export const UsersListRow = ({ user }) => {
  const { email, name, role, subscription, id } = user;
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <Row onClick={openModal}>
      <StyledBodyCell>{email}</StyledBodyCell>
      <StyledBodyCell>{name}</StyledBodyCell>
      <StyledBodyCell>{role}</StyledBodyCell>
      <StyledBodyCell>{subscription?.plan?.type || ""}</StyledBodyCell>
      <StyledBodyCell>{subscription?.tokens || 0}</StyledBodyCell>
      <StyledBodyCell>
        <Stack
          direction="row"
          justifyContent="center"
          gap="10px"
          alignItems="center"
        >
          <StyledBtn>
            <Edit />
          </StyledBtn>
          <StyledBtn>
            <Bin />
          </StyledBtn>
        </Stack>
      </StyledBodyCell>
      <Suspense>
        <Drawer open={open} onClose={closeModal} title={email}>
          <UserTransactionsInfo id={id} />
        </Drawer>
      </Suspense>
    </Row>
  );
};

UsersListRow.propTypes = {
  user: PropTypes.object.isRequired,
};
