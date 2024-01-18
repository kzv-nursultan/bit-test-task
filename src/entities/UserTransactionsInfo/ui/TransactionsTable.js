import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import { StyledBodyCell, StyledHeadCell } from "../../../shared/ui";
import styled from "@emotion/styled";
import { TRANSACTION_TYPE } from "../../../shared/consts/enums";

const HeadTitles = ["Тип", "Сумма", "Дата"];

const transactionTypeValidator = (type, ifTrue, ifFalse) =>
  type === TRANSACTION_TYPE["REPLENISH"]["key"] ? ifTrue : ifFalse;

const HeadCell = styled(StyledHeadCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    "&:last-child": {
      border: 0,
      borderTopRightRadius: "8px",
      borderBottomRightRadius: 0,
    },
    "&:first-of-type": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "14px",
    },
  },
}));

const BodyCell = styled(StyledBodyCell)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    padding: "14px",
  },
}));

const CurrencyAmount = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "type",
})(({ type, theme }) => ({
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "18px",
  fontFamily: "'IBM Plex Sans', sans-serif",
  color: transactionTypeValidator(type, "#1ABB34", "#FE4242"),
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

export const TransactionsTable = ({ data = [] }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {HeadTitles.map((title) => (
            <HeadCell key={title}>{title}</HeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((obj) => (
          <TableRow key={obj.id}>
            <BodyCell>{TRANSACTION_TYPE[obj.type].val}</BodyCell>
            <BodyCell>
              <CurrencyAmount type={obj.type}>
                {transactionTypeValidator(obj.type, "+", "-")}
                {obj.amount} {obj.currency}
              </CurrencyAmount>
            </BodyCell>
            <BodyCell>
              {new Date(obj.created_at).toLocaleString("ru-RU", {
                hour12: false,
              })}
            </BodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionsTable.propTypes = {
  data: PropTypes.array.isRequired,
};
