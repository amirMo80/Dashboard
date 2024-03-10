import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { SubscribeTooltip } from "./";

import { subscriptionDataChart } from "../../../data/SubscriptionDataChart";

const Subscribe = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid xs={12} md={7}>
        <Box
          sx={{
            height: 450,
            mx: 2,
            mb: 4,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "text.main",
                  fontFamily: "IRANSans-DemiBold",
                  fontSize: "1.1rem",
                }}
              >
                مصرف اشتراک
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#6c737f", fontSize: ".8rem" }}
              >
                بر اساس دوره انتخابی
              </Typography>
            </Box>
            <Box
              sx={{
                width: 120,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "primary.main",
                  fontFamily: "IRANSans-DemiBold",
                  borderBottom: "2px solid #6366F1",
                  pb: 0.5,
                  cursor: "pointer",
                }}
              >
                سال
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "IRANSans-DemiBold",
                  cursor: "pointer",
                  color: "text.main",
                }}
              >
                ماه
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "IRANSans-DemiBold",
                  cursor: "pointer",
                  color: "text.main",
                }}
              >
                هفته
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: 1, height: 500 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subscriptionDataChart}>
                <XAxis
                  dataKey="number"
                  fontFamily="IRANSans-Regular"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />
                <Tooltip content={SubscribeTooltip} cursor={false} />
                <Bar
                  dataKey="امسال"
                  stackId="a"
                  fill="#6366f1d9"
                  barSize={isMdDown ? 26 : 30}
                />
                <Bar
                  barSize={isMdDown ? 26 : 30}
                  dataKey="پارسال"
                  stackId="a"
                  fill="#ebeefed9"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Box
            sx={{
              width: 110,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
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
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  borderRadius: "2px",
                  backgroundColor: "#6366f1d9",
                  mr: 1,
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "12px", color: "#6C737F" }}
              >
                امسال
              </Typography>
            </Box>
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
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  borderRadius: "2px",
                  backgroundColor: "#ebeefed9",
                  mr: 1,
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "12px", color: "#6C737F" }}
              >
                پارسال
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Subscribe;
