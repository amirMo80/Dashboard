import {
  Box,
  LinearProgress,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import america from "../../../assets/images/america.svg";
import spain from "../../../assets/images/spain.svg";
import english from "../../../assets/images/english.svg";
import german from "../../../assets/images/german.svg";
import canada from "../../../assets/images/canada.svg";

import worldMap from "../../../assets/images/worldMap.jpg";

const SalesCountry = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid xs={12} lg={8}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          m: 2,
          backgroundColor: "#FFF",
          boxShadow:
            "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
          border: "1px solid #F2F4F7",
          borderRadius: "20px",
          padding: "32px 24px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            fontFamily: "IRANSans-DemiBold",
            color: "text.main",
            mb: isSmDown ? 2 : 0,
          }}
        >
          فروش بر اساس کشور
        </Typography>
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: isSmDown ? "column" : "row",
            justifyContent: isSmDown ? "center" : "space-around",
            alignItems: isSmDown ? "center" : "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: isSmDown ? 1 : 0.5,
              height: 1,
              mb: isSmDown ? 2 : 0,
            }}
          >
            <Box
              component="img"
              src={worldMap}
              sx={{ width: 1, height: 1, objectFit: "cover", opacity: 0.5 }}
            />
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "20%",
                left: "40%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                zIndex: "3",
                "::before": {
                  content: "' '",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.2,
                },
                "::after": {
                  content: "' '",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.3,
                },
              }}
            />
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "30%",
                left: "80%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                zIndex: "3",
                "::before": {
                  content: "' '",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.2,
                },
                "::after": {
                  content: "' '",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.3,
                },
              }}
            />
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "60%",
                left: "70%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                zIndex: "3",
                "::before": {
                  content: "' '",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.2,
                },
                "::after": {
                  content: "' '",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.3,
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: isSmDown ? 1 : 0.4,
              height: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ width: 1, mb: 1 }}>
              <Typography
                variant="body2"
                sx={{ fontSize: ".9rem", color: "#6c737f", mb: 0.5 }}
              >
                جمع
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "IRANSans-Bold",
                  fontSize: "1.4rem",
                  color: "text.main",
                }}
              >
                152 هزار
              </Typography>
            </Box>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 1,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={america}
                  sx={{ width: 38, height: 38 }}
                />
                <Box sx={{ width: 1, mx: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: "text.main",
                      mb: 2,
                    }}
                  >
                    آمریکا
                  </Typography>
                  <LinearProgress
                    sx={{ width: 1, borderRadius: "8px" }}
                    variant="determinate"
                    value={60}
                    color="primary"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    color: "text.main",
                    alignSelf: "end",
                  }}
                >
                  60%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={spain}
                  sx={{ width: 38, height: 38 }}
                />
                <Box sx={{ width: 1, mx: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: "text.main",
                      mb: 2,
                    }}
                  >
                    اسپانیا
                  </Typography>
                  <LinearProgress
                    sx={{ width: 1, borderRadius: "8px" }}
                    variant="determinate"
                    value={20}
                    color="primary"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    color: "text.main",
                    alignSelf: "end",
                  }}
                >
                  20%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={english}
                  sx={{ width: 38, height: 38 }}
                />
                <Box sx={{ width: 1, mx: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: "text.main",
                      mb: 2,
                    }}
                  >
                    انگلیس
                  </Typography>
                  <LinearProgress
                    sx={{ width: 1, borderRadius: "8px" }}
                    variant="determinate"
                    value={10}
                    color="primary"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    color: "text.main",
                    alignSelf: "end",
                  }}
                >
                  10%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={german}
                  sx={{ width: 38, height: 38 }}
                />
                <Box sx={{ width: 1, mx: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: "text.main",
                      mb: 2,
                    }}
                  >
                    آلمان
                  </Typography>
                  <LinearProgress
                    sx={{ width: 1, borderRadius: "8px" }}
                    variant="determinate"
                    value={5}
                    color="primary"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    color: "text.main",
                    alignSelf: "end",
                  }}
                >
                  5%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box
                  component="img"
                  src={canada}
                  sx={{ width: 38, height: 38 }}
                />
                <Box sx={{ width: 1, mx: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: "text.main",
                      mb: 2,
                    }}
                  >
                    کانادا
                  </Typography>
                  <LinearProgress
                    sx={{ width: 1, borderRadius: "8px" }}
                    variant="determinate"
                    value={5}
                    color="primary"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    color: "text.main",
                    alignSelf: "end",
                  }}
                >
                  5%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default SalesCountry;
