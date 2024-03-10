import { useState, useEffect } from "react";

import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { EastRounded, RefreshOutlined } from "@mui/icons-material";

import EllipsisText from "react-ellipsis-text";

import { grey } from "@mui/material/colors";

import avatar_1 from "../../../assets/images/avatar1.png";
import avatar_2 from "../../../assets/images/avatar2.png";
import avatar_3 from "../../../assets/images/avatar3.png";
import avatar_4 from "../../../assets/images/avatar4.png";
import avatar_5 from "../../../assets/images/avatar5.png";

const Inbox = () => {
  const [ellipsisTextValue, setEllipsisTextValue] = useState(1000);

  useEffect(() => {
    const chatBox = document.querySelector(".chatBox");

    if (chatBox.clientWidth <= 440) {
      setEllipsisTextValue(22);
    } else {
      setEllipsisTextValue(10000);
    }
  }, []);

  return (
    <>
      <Grid xs={12} md={5}>
        <Box
          className="chatBox"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            mx: 2,
            mb: 2,
            backgroundColor: "#FFF",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 0.2,
              padding: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: "1.1rem",
                color: "text.main",
              }}
            >
              صندوق ورودی
            </Typography>
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
              <RefreshOutlined sx={{ fontSize: "1.5rem" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 1,
                height: 75,
                padding: "0px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={avatar_1}
                    sx={{ width: 45, height: 45, borderRadius: "50%" }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: -1,
                      right: -1,
                    }}
                  />
                </Box>
                <Box component="span" sx={{ ml: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      mb: 0.2,
                    }}
                  >
                    رضا فیروزی
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    <EllipsisText
                      text="سلام ما قبلا تلفنی صحبت کردیم"
                      length={ellipsisTextValue}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box component="span">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#6C737F", fontSize: ".7rem" }}
                >
                  2 دقیقه قبل
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 75,
                padding: "0px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={avatar_2}
                    sx={{ width: 45, height: 45, borderRadius: "50%" }}
                  />
                </Box>
                <Box component="span" sx={{ ml: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      mb: 0.2,
                    }}
                  >
                    آرش قبادی
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    <EllipsisText
                      text="آیا کار هنوز در دسترس است؟"
                      length={ellipsisTextValue}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box component="span">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#6C737F", fontSize: ".7rem" }}
                >
                  56 دقیقه قبل
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 75,
                padding: "0px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={avatar_3}
                    sx={{ width: 45, height: 45, borderRadius: "50%" }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: -1,
                      right: -1,
                    }}
                  />
                </Box>
                <Box component="span" sx={{ ml: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      mb: 0.2,
                    }}
                  >
                    بهرام میرزایی
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    <EllipsisText
                      text="کار غربالگری چیست؟ من می خواهم"
                      length={ellipsisTextValue}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box component="span">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#6C737F", fontSize: ".7rem" }}
                >
                  3 ساعت قبل
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 75,
                padding: "0px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={avatar_4}
                    sx={{ width: 45, height: 45, borderRadius: "50%" }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: -1,
                      right: -1,
                    }}
                  />
                </Box>
                <Box component="span" sx={{ ml: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      mb: 0.2,
                    }}
                  >
                    امیرحسین رضایی
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    <EllipsisText
                      text="همچنان منتظر بازخورد هستیم"
                      length={ellipsisTextValue}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box component="span">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#6C737F", fontSize: ".7rem" }}
                >
                  8 ساعت قبل
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 1,
                height: 75,
                padding: "0px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                borderBottom: "1px solid #F2F4F7",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={avatar_5}
                    sx={{ width: 45, height: 45, borderRadius: "50%" }}
                  />
                </Box>
                <Box component="span" sx={{ ml: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      mb: 0.2,
                    }}
                  >
                    کوروش اقبالی
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    <EllipsisText
                      text="در مورد کمپین ها به اطلاعات بیشتری نیاز دارید"
                      length={ellipsisTextValue}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box component="span">
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#6C737F", fontSize: ".7rem" }}
                >
                  10 ساعت قبل
                </Typography>
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
                رفتن به چت
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

export default Inbox;
