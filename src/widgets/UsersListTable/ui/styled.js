import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    justifyContent: "center",
  },
  "& .MuiPaginationItem-root": {
    padding: "6px 14px",
    borderRadius: 8,
    color: "#FFF",
    minWidth: "38px",
    fontFamily: "'IBM Plex Sans', sans-serif",
    boxSizing: "border-box",
    border: 0,
    "&:hover": {
      backgroundColor: theme.colors.grayBorder,
    },
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#1C64F2",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  borderRadius: 18,
  backgroundColor: theme.colors.baseBg,
}));
