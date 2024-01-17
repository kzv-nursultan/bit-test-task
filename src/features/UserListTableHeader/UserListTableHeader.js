import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Arrow, StyledHeadCell } from "../../shared/ui";
import { TOKENS_ORDER } from "../../shared/consts/enums";
import Button from "@mui/material/Button";

const StyledBtn = styled(Button, {
  shouldForwardProp: (prop) => prop !== "order",
})(({ theme, order }) => ({
  padding: 0,
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "18px",
  fontFamily: "'IBM Plex Sans', sans-serif",
  textTransform: "capitalize",
  color: theme.colors.grayTableText,
  "& .MuiButton-endIcon": {
    transform: order === TOKENS_ORDER.asc ? "rotate(180deg)" : "rotate(0)",
    marginLeft: 10,
  },
}));

const tableHeader = ["Email", "Имя", "Роль", "Подписка", "Токены", "Действия"];

export const UserListTableHeader = ({ setOrder, order }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeader.map((title) => (
          <StyledHeadCell key={title}>
            {title === "Токены" ? (
              <StyledBtn onClick={setOrder} endIcon={<Arrow />} order={order}>
                {title}
              </StyledBtn>
            ) : (
              title
            )}
          </StyledHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

UserListTableHeader.propTypes = {
  setOrder: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};
