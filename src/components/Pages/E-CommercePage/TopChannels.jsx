import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

import { topChannelsData } from "../../../data/E_CommerceData";

import { TopChannelTooltip } from "./";

const TopChannels = () => {
  const COLORS = ["#E5E7EB", "#06aed4", "#6366f1", "#f79009"];

  return (
    <Grid xs={12} lg={4}>
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
        <Box sx={{ width: 1, mb: 2 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "IRANSans-DemiBold",
              fontSize: "1.1rem",
              color: "text.main",
            }}
          >
            ریز هزینه
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: ".8rem", color: "#6c737f" }}
          >
            بر اساس دوره انتخابی
          </Typography>
        </Box>
        <Box>
          <PieChart width={400} height={200}>
            <Tooltip content={TopChannelTooltip} />
            <Pie
              cy="50%"
              cx="50%"
              data={topChannelsData}
              startAngle={0}
              endAngle={360}
              innerRadius={60}
              outerRadius={90}
              dataKey="number"
              stroke="none"
            >
              {topChannelsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: ".9rem",
                fontFamily: "IRANSans-DemiBold",
                color: "text.main",
              }}
            >
              کانال های برتر
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: ".9rem",
                fontFamily: "IRANSans-DemiBold",
                color: "text.main",
              }}
            >
              مقدار
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
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
                  width: 8,
                  height: 8,
                  backgroundColor: "#E5E7EB",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: ".9rem", color: "text.main" }}
              >
                استراتژی
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: ".9rem", color: "#6c737f" }}
            >
              14,0000 ریال
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
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
                  width: 8,
                  height: 8,
                  backgroundColor: "#06aed4",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: ".9rem", color: "text.main" }}
              >
                منبع یابی خارجی
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: ".9rem", color: "#6c737f" }}
            >
              35,0000 ریال
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
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
                  width: 8,
                  height: 8,
                  backgroundColor: "#6366f1",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: ".9rem", color: "text.main" }}
              >
                بازاریابی
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: ".9rem", color: "#6c737f" }}
            >
              45,0000 ریال
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
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
                  width: 8,
                  height: 8,
                  backgroundColor: "#f79009",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: ".9rem", color: "text.main" }}
              >
                سایر
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: ".9rem", color: "#6c737f" }}
            >
              25,0000 ریال
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default TopChannels;
