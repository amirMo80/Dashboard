import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CalendarTodayOutlined, EastRounded } from "@mui/icons-material";

import { grey } from "@mui/material/colors";

const Events = () => {
  return (
    <>
      <Grid xs={12} md={5}>
        <Box
          sx={{
            backgroundColor: "#FFF",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            paddingTop: "32px",
            m: 2,
          }}
        >
          <Box sx={{ width: 1, height: 0.2, padding: "0px 24px" }}>
            <Typography
              variant="body1"
              sx={{ fontFamily: "IRANSans-DemiBold", fontSize: "1.1rem" }}
            >
              رویدادهای پیش رو
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "rgb(108, 115, 127)", fontSize: ".8rem" }}
            >
              بر اساس حساب‌های بانکی مرتبط
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                width: 1,
                height: 80,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F3F4F6",
                    py: 0.5,
                    px: 1,
                    mr: 2,
                    borderRadius: "18px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.main", fontSize: ".9rem" }}
                  >
                    مرداد
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "text.main",
                      fontSize: "1.2rem",
                    }}
                  >
                    16
                  </Typography>
                </Box>
                <Box component="span">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                    }}
                  >
                    جلسه با شرکا
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    17:00 الی 18:00
                  </Typography>
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px",
                  width: 40,
                  height: 40,
                  color: "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <CalendarTodayOutlined sx={{ fontSize: "1.2rem" }} />
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 80,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F3F4F6",
                    py: 0.5,
                    px: 1,
                    mr: 2,
                    borderRadius: "18px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.main", fontSize: ".9rem" }}
                  >
                    مرداد
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "text.main",
                      fontSize: "1.2rem",
                    }}
                  >
                    19
                  </Typography>
                </Box>
                <Box component="span">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                    }}
                  >
                    جلسه هفتگی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    17:00 الی 18:00
                  </Typography>
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px",
                  width: 40,
                  height: 40,
                  color: "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <CalendarTodayOutlined sx={{ fontSize: "1.2rem" }} />
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 80,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F3F4F6",
                    py: 0.5,
                    px: 1,
                    mr: 2,
                    borderRadius: "18px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.main", fontSize: ".9rem" }}
                  >
                    مرداد
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "text.main",
                      fontSize: "1.2rem",
                    }}
                  >
                    19
                  </Typography>
                </Box>
                <Box component="span">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                    }}
                  >
                    جلسه هفتگی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    17:00 الی 18:00
                  </Typography>
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px",
                  width: 40,
                  height: 40,
                  color: "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <CalendarTodayOutlined sx={{ fontSize: "1.2rem" }} />
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 80,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F3F4F6",
                    py: 0.5,
                    px: 1,
                    mr: 2,
                    borderRadius: "18px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.main", fontSize: ".9rem" }}
                  >
                    مرداد
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "text.main",
                      fontSize: "1.2rem",
                    }}
                  >
                    22
                  </Typography>
                </Box>
                <Box component="span">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                    }}
                  >
                    جلسه هفتگی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    17:00 الی 18:00
                  </Typography>
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px",
                  width: 40,
                  height: 40,
                  color: "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <CalendarTodayOutlined sx={{ fontSize: "1.2rem" }} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "12px",
              borderTop: "1px solid #F2F4F7",
            }}
          >
            <Button
              sx={{
                borderRadius: "12px",
                color: "text.main",
                ":hover": { backgroundColor: "rgba(17, 25, 39, 0.04)" },
              }}
            >
              <Typography
                variant="button"
                sx={{ fontFamily: "IRANSans-DemiBold" }}
              >
                دیدن همه
              </Typography>
              <EastRounded
                sx={{
                  transform: "rotate(180deg)",
                  ml: 1,
                  fontSize: "1.2rem",
                }}
              />
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Events;
