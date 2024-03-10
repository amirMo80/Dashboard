import {
  Box,
  Switch,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Notification = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
          boxShadow:
            "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
          border: "1px solid #F2F4F7",
          borderRadius: "20px",
          padding: "32px 24px",
          m: 2,
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: isMdDown ? "column" : "row",
            justifyContent: isMdDown ? "center" : "space-between",
            alignItems: isMdDown ? "flex-start" : "flex-start",
            borderBottom: "1px solid #F2F4F7",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "IRANSans-DemiBold",
              fontSize: "1.1rem",
              color: "text.main",
              mb: isMdDown ? 2 : 0,
            }}
          >
            ایمیل
          </Typography>
          <Box
            sx={{
              width: isMdDown ? 1 : 0.7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #F2F4F7",
                pb: 2,
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem", color: "text.main", mb: 1 }}
                >
                  به روز رسانی محصول
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  اخبار، اطلاعیه ها و به روز رسانی محصول.
                </Typography>
              </Box>
              <Switch defaultChecked />
            </Box>
            <Box
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem", color: "text.main", mb: 1 }}
                >
                  به روز رسانی امنیتی
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  اطلاعیه های مهم در مورد امنیت حساب شما.
                </Typography>
              </Box>
              <Switch defaultChecked />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: isMdDown ? "column" : "row",
            justifyContent: isMdDown ? "center" : "space-between",
            alignItems: "flex-start",
            pt: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "IRANSans-DemiBold",
              fontSize: "1.1rem",
              color: "text.main",
              mb: isMdDown ? 2 : 0,
            }}
          >
            اعلان های تلفن
          </Typography>
          <Box
            sx={{
              width: isMdDown ? 1 : 0.7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem", color: "text.main", mb: 1 }}
                >
                  به روز رسانی امنیتی
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  اطلاعیه های مهم در مورد امنیت حساب شما.
                </Typography>
              </Box>
              <Switch />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Notification;
