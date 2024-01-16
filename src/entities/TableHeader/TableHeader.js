import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import { Arrow } from "../../shared/ui";
import { TOKENS_ORDER } from "../../shared/consts/enums";

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

const StyledBtn = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "order",
})(({ order }) => ({
  padding: 0,
  transform: order === TOKENS_ORDER.asc ? "rotate(180deg)" : "rotate(0)",
}));

export const TableHeader = ({ row = [""], setOrder, order }) => {
  return (
    <TableHead>
      <TableRow>
        {row.map((title) => (
          <StyledTableCell key={title}>
            {title}{" "}
            {title === "Токены" && (
              <StyledBtn sx={{ padding: 0 }} onClick={setOrder} order={order}>
                <Arrow />
              </StyledBtn>
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOrder: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};
