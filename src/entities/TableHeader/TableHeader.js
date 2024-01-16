import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.colors.body,
    color: theme.colors.grayTableText,
    textAlign: "center",
    padding: "14px 20px",
    boxSizing: "border-box",
    border: 0,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'IBM Plex Sans', sans-serif",
    "&:last-child": {
      border: 0,
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
    "&:first-of-type": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
}));

export const TableHeader = ({ row = [""] }) => {
  return (
    <TableHead>
      <TableRow>
        {row.map((title) => (
          <StyledTableCell key={title}>{title}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
};
