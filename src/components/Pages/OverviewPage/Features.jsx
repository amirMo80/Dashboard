import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { TuneOutlined } from "@mui/icons-material";

import person from "../../../assets/images/person-standing.png";

const Features = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid xs={12} md={7} sx={{ mb: isMdDown ? 4 : 2 }}>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: isMdDown ? "column" : "row",
            justifyContent: isMdDown ? "space-between" : "space-between",
            alignItems: isMdDown ? "center" : "center",
            borderRadius: "20px",
            backgroundColor: "#F5F7FF",
            padding: "32px 24px",
            mx: 2,
          }}
        >
          <Box
            component="img"
            src={person}
            sx={{
              width: isMdDown ? 220 : 180,
              height: isMdDown ? 220 : 180,
              mr: isMdDown ? 0 : 4,
              objectFit: "contain",
            }}
          />
          <Box
            sx={{
              height: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: ".9rem",
                mt: 4,
                mb: 2,
              }}
              color="primary"
            >
              به روز رسانی جدید ورژن 6
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                mb: 1,
                fontSize: "1.1rem",
              }}
            >
              به روز رسانی جدیدی در دسترس است !
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: "25px", color: "#111927" }}
            >
              الگوی مورد علاقه شما ظاهری شیک و جدید، گزینه‌های سفارشی‌سازی
              بیشتر، صفحه‌نمایش و موارد دیگر دارد.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                boxShadow: "none",
                ":hover": {
                  boxShadow: "none",
                },
                padding: "8px 16px",
                mt: 2,
                borderRadius: "12px",
              }}
            >
              <Typography
                variant="button"
                sx={{ mr: 1, fontFamily: "IRANSans-DemiBold" }}
              >
                باز کردن تنظیمات برنامه
              </Typography>
              <TuneOutlined />
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Features;
