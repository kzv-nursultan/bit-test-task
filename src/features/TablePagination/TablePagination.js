import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { ArrowButton } from "./ui/ArrowButton";
import styled from "@emotion/styled";
import { NumberedBtn } from "./ui/NumberedBtn";

const StackContainer = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
}));

export const TablePagination = ({ page, setPage, totalPages }) => {
  const setNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const setPrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const onNumberedBtnClick = (val) => () => setPage(val);

  return (
    totalPages && (
      <Box m="24px 34px">
        <StackContainer>
          <ArrowButton rotate={"90deg"} onClick={setPrevPage} />
          <StackContainer>
            {[...new Array(totalPages)].map((_, i) => (
              <NumberedBtn
                key={i}
                value={i + 1}
                active={page === i + 1}
                onClick={onNumberedBtnClick(i + 1)}
              />
            ))}
          </StackContainer>
          <ArrowButton rotate={"-90deg"} onClick={setNextPage} />
        </StackContainer>
      </Box>
    )
  );
};

TablePagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
