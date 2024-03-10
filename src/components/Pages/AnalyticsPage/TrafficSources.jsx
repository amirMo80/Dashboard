import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { trafficData } from "../../../data/TrafficData";
import { TrafficTooltip } from "./";

const TrafficSources = () => {
  return (
    <>
      <Grid xs={12} xl={8}>
        <Box
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
            padding: "32px 24px",
          }}
        >
          <Box component="span" sx={{ width: 1, mb: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                fontFamily: "IRANSans-DemiBold",
                color: "text.main",
              }}
            >
              منابع ترافیک
            </Typography>
          </Box>
          <Box sx={{ width: 1, height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData} layout="vertical">
                <YAxis type="category" hide />
                <XAxis
                  type="number"
                  fontFamily="IRANSans-Regular"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  color="#111927"
                />
                <Tooltip content={TrafficTooltip} cursor={false} />
                <Bar
                  barSize={30}
                  stackId="a"
                  dataKey="ارگانیک"
                  fill="#6366f1d9"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  barSize={30}
                  stackId="a"
                  dataKey="بازاریابی"
                  fill="#ebeefed9"
                  radius={[0, 8, 8, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default TrafficSources;
