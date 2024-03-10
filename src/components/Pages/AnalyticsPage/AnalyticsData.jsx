import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { EastRounded } from "@mui/icons-material";

import {
  SpentData,
  impressionsData,
  engagementsData,
} from "../../../data/AnalyticsData";

const AnalyticsData = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid xs={12} md={4}>
        <Box
          className="area-chart"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            m: 2,
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 0.9,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 24px",
            }}
          >
            <Box component="span" sx={{ width: 0.45 }}>
              <Typography
                variant="body2"
                sx={{ color: "#6C737F", fontSize: "1rem", mb: 1 }}
              >
                برداشت ها
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.main",
                  fontFamily: "IRANSans-Bold",
                  fontSize: isSmDown ? "1.1rem" : "1.2rem",
                }}
              >
                36,6 هزار
              </Typography>
            </Box>
            <Box sx={{ width: 0.5, height: 80 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impressionsData}>
                  <defs>
                    <linearGradient
                      id="colorNumber"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="2%" stopColor="#6366F1" stopOpacity={0.3} />
                      <stop offset="98%" stopColor="#6366F1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="bump"
                    dataKey="number"
                    stroke="#6366F1"
                    fill="url(#colorNumber)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              borderTop: "1px solid #F2F4F7",
              padding: "8px",
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
                منابع را ببینید
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
      <Grid xs={12} md={4}>
        <Box
          className="area-chart"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            m: 2,
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 0.9,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 24px",
            }}
          >
            <Box component="span" sx={{ width: 0.5 }}>
              <Typography
                variant="body2"
                sx={{ color: "#6C737F", fontSize: "1rem", mb: 1 }}
              >
                اشتغال
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.main",
                  fontFamily: "IRANSans-Bold",
                  fontSize: isSmDown ? "1.1rem" : "1.2rem",
                }}
              >
                19 هزار
              </Typography>
            </Box>
            <Box sx={{ width: 0.5, height: 80 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementsData}>
                  <defs>
                    <linearGradient
                      id="colorNumber"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="2%" stopColor="#6366F1" stopOpacity={0.3} />
                      <stop offset="98%" stopColor="#6366F1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="bump"
                    dataKey="number"
                    stroke="#6366F1"
                    fill="url(#colorNumber)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              borderTop: "1px solid #F2F4F7",
              padding: "8px",
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
                ترافیک را ببینید
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
      <Grid xs={12} md={4}>
        <Box
          className="area-chart"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            m: 2,
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 0.9,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 24px",
            }}
          >
            <Box component="span" sx={{ width: 0.5 }}>
              <Typography
                variant="body2"
                sx={{ color: "#6C737F", fontSize: "1rem", mb: 1 }}
              >
                مانده
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.main",
                  fontFamily: "IRANSans-Bold",
                  fontSize: isSmDown ? "1.1rem" : "1.2rem",
                }}
              >
                32,000 ریال
              </Typography>
            </Box>
            <Box sx={{ width: 0.5, height: 80 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SpentData}>
                  <defs>
                    <linearGradient
                      id="colorNumber"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="2%" stopColor="#6366F1" stopOpacity={0.3} />
                      <stop offset="98%" stopColor="#6366F1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="bump"
                    dataKey="number"
                    stroke="#6366F1"
                    fill="url(#colorNumber)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              borderTop: "1px solid #F2F4F7",
              padding: "8px",
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
                کمپین ها را ببینید
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

export default AnalyticsData;
