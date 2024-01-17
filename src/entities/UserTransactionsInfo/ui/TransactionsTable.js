import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableHead } from "@mui/material";

export const TransactionsTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        
      </TableHead>
      <TableBody></TableBody>
    </Table>
  );
};

TransactionsTable.propTypes = {
  data: PropTypes.object.isRequired,
};
