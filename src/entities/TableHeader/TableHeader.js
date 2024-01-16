import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PropTypes from "prop-types";

const borderRadiusValidator = (first, last) => {
  if (first) {
    return {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    };
  } else if (last) {
    return {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    };
  } else {
    return;
  }
};

const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "first" && prop !== "last",
})(({ theme, first, last }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.colors.body,
    color: theme.colors.grayTableText,
    textAlign: "center",
    border: "none",
    padding: "14px 20px",
    boxSizing: "border-box",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'IBM Plex Sans', sans-serif",
    ...borderRadiusValidator(first, last),
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
}));

export const TableHeader = ({ row = [] }) => {
  return (
    <TableHead sx={{ border: "none" }}>
      <TableRow>
        {row.map((title, i) => (
          <StyledTableCell
            key={title}
            first={i === 0}
            last={i === row.length - 1}
          >
            {title}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableCell.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
};
