import React from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'IBM Plex Sans', sans-serif",
    color: "#FFF",
    borderBottom: `1px solid ${theme.colors.grayBorder}`,
    padding: "14px 20px",
    textAlign: "center",
  },
}));

export const UsersListRow = ({ user }) => {
  const { email, name, role, subscription } = user;
  console.log(user);
  return (
    <TableRow>
      <StyledTableCell>{email}</StyledTableCell>
      <StyledTableCell>{name}</StyledTableCell>
      <StyledTableCell>{role}</StyledTableCell>
      <StyledTableCell>{subscription?.plan?.type || ""}</StyledTableCell>
      <StyledTableCell>{subscription?.tokens || 0}</StyledTableCell>
      <StyledTableCell></StyledTableCell>
    </TableRow>
  );
};

UsersListRow.propTypes = {
  user: PropTypes.object.isRequired,
};
