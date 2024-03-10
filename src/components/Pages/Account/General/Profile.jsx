import {
  Box,
  Switch,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Profile = () => {
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: isMdDown ? "column" : "row",
        justifyContent: isMdDown ? "center" : "space-between",
        alignItems: "flex-start",
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
        my: 4,
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
        نمایه عمومی
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
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "1px solid #F2F4F7",
            mb: 2,
            padding: "8px 0px",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: isMdDown ? "0.9" : "1rem",
                color: "text.main",
                mb: 2,
              }}
            >
              اطلاعات تماس را عمومی کنید
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: isMdDown ? ".8" : ".9rem", color: "#6c737f" }}
            >
              به این معنی که هر کسی که نمایه شما را مشاهده کند، می‌تواند جزئیات
              مخاطبین شما را ببیند.
            </Typography>
          </Box>
          <Switch />
        </Box>
        <Box
          sx={{
            width: 1,
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "8px 0px",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: isMdDown ? ".9rem" : "1rem",
                color: "text.main",
                mb: 2,
              }}
            >
              برای استخدام در دسترس است
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: isMdDown ? ".8rem" : ".9rem",
                color: "#6c737f",
              }}
            >
              تغییر این حالت به هم تیمی‌های شما اجازه می‌دهد تا بدانند که شما
              برای به دست آوردن پروژه‌های جدید در دسترس هستید.{" "}
            </Typography>
          </Box>
          <Switch defaultChecked />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
