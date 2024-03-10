import { Box, Typography, Button } from "@mui/material";

import tick from "../../../assets/images/tick.svg";

const Account = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        m: 2,
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
      }}
    >
      <Box component="img" src={tick} />
      <Typography
        variant="body1"
        sx={{
          fontFamily: "IRANSans-DemiBold",
          fontSize: "1rem",
          color: "text.main",
          my: 2,
        }}
      >
        حساب خود را به Pro ارتقا دهید.
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: ".9rem", color: "#6c737f", textAlign: "center" }}
      >
        ویژگی‌های انحصاری مانند Test Networks، Test Swaps و غیره را باز کنید.
      </Typography>
      <Button
        sx={{
          width: 74,
          height: 38,
          mt: 2,
          fontFamily: "IRANSans-DemiBold",
          boxShadow: "none",
          borderRadius: ".6rem",
          ":hover": {
            boxShadow: "none",
          },
        }}
        variant="contained"
        color="primary"
      >
        ارتقا
      </Button>
    </Box>
  );
};

export default Account;
