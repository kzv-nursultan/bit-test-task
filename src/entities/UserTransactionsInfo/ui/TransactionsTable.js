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

const HeadCell = styled(StyledHeadCell)(() => ({
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
  },
}));

const CurrencyAmount = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "type",
})(({ type }) => ({
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "18px",
  fontFamily: "'IBM Plex Sans', sans-serif",
  color: transactionTypeValidator(type, "#1ABB34", "#FE4242"),
  textAlign: "center",
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
          <TableRow>
            <StyledBodyCell>{TRANSACTION_TYPE[obj.type].val}</StyledBodyCell>
            <StyledBodyCell>
              <CurrencyAmount type={obj.type}>
                {transactionTypeValidator(obj.type, "+", "-")}
                {obj.amount} {obj.currency}
              </CurrencyAmount>
            </StyledBodyCell>
            <StyledBodyCell>
              {new Date(obj.created_at).toLocaleString("ru-RU", {
                hour12: false,
              })}
            </StyledBodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionsTable.propTypes = {
  data: PropTypes.array.isRequired,
};
