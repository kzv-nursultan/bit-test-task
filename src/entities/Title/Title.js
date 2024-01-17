import { Box, Typography, styled } from '@mui/material';
import PropTypes from "prop-types";

const TextWrapper = styled(Box)(({ theme }) => ({
  padding: "24px 34px",
  [theme.breakpoints.down("md")]: {
    padding: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "18px 16px",
  },
}));

const Text = styled(Typography)(() => ({
  fontSize: 22,
  fontWeight: 600,
  lineHeight: "29px",
}));

export const Title = ({ title, wrapperProps }) => {
  return (
    <TextWrapper {...wrapperProps}>
      <Text>{title}</Text>
    </TextWrapper>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  wrapperProps: PropTypes.object
}

