import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const DeleteAccount = () => {
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: isMdDown ? "column" : "row",
        justifyContent: isMdDown ? "flex-start" : "space-between",
        alignItems: isMdDown ? "center" : "flex-start",
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
        mt: 4,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: isMdDown ? 1 : 0.3,
          fontFamily: "IRANSans-DemiBold",
          fontSize: "1.1rem",
          color: "text.main",
          mb: isMdDown ? 4 : 0,
        }}
      >
        حذف حساب کاربری
      </Typography>
      <Box
        sx={{
          width: isMdDown ? 1 : 0.7,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: isMdDown ? ".9rem" : "1rem",
            color: "text.main",
            mb: 4,
          }}
        >
          حساب خود و تمام داده های منبع خود را حذف کنید. این برگشت ناپذیر است.
        </Typography>
        <Button
          variant="outlined"
          color="error"
          sx={{
            width: 140,
            height: 44,
            boxShadow: "none",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", fontFamily: "IRANSans-DemiBold" }}
          >
            حذف حساب
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteAccount;
