import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Title = ({ titleName, showBtn, btnName, icon }) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        component="div"
        sx={{
          width: 1,
          mt: 8,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: isMdDown ? "1.4rem" : "2.4rem",
          }}
        >
          {titleName}
        </Typography>
        {showBtn ? (
          <Button
            color="primary"
            variant="contained"
            sx={{
              boxShadow: "none",
              borderRadius: ".6rem",
              minWidth: 160,
              ":hover": {
                boxShadow: "none",
              },
            }}
          >
            <Typography variant="button" sx={{ fontSize: "1rem" }}>
              {btnName}
            </Typography>
            {icon}
          </Button>
        ) : null}
      </Box>
    </>
  );
};

export default Title;
