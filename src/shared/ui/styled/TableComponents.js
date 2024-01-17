import styled from "@emotion/styled";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledHeadCell = styled(TableCell)(({ theme }) => ({
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
}));

export const StyledBodyCell = styled(TableCell)(({ theme }) => ({
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