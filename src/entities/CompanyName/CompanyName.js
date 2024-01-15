import { Box, Stack, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import { SuitCase } from "../../shared/ui";

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "3.5px 4px 4.5px 4px",
  width: 24,
  height: 24,
  borderRadius: 4,
  backgroundColor: theme.colors.grayBorder,
  alignItems: "center",
  boxSizing: "border-box"
}));

const CompanyText = styled(Typography)(() => ({
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "22px",
}));

export const CompanyName = ({ name = "Моя организация" }) => (
  <Box>
    <Stack direction="row" gap="10px">
      <IconContainer>
        <SuitCase />
      </IconContainer>
      <CompanyText>{name}</CompanyText>
    </Stack>
  </Box>
);

CompanyName.propTypes = {
  name: PropTypes.string,
};
