import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

import { InfoOutlined } from "@mui/icons-material";

import { SocialMediaTooltip } from "./";

const socialMediaData = [
  {
    name: "اینستاگرام",
    number: 20,
  },
  {
    name: "لینکدین",
    number: 10,
  },
  {
    name: "فیسبوک",
    number: 10,
  },
];

const COLORS = ["#06aed4", "#6366f1", "#f79009"];

const SocialMedia = () => {
  return (
    <>
      <Grid xs={12} lg={4}>
        <Box
          sx={{
            height: 400,
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
          <Box
            component="span"
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.main",
                fontSize: "1.1rem",
                fontFamily: "IRANSans-DemiBold",
              }}
            >
              منابع شبکه های اجتماعی
            </Typography>
            <InfoOutlined sx={{ color: "#6c737f", fontSize: "1.5rem" }} />
          </Box>
          <Box>
            <PieChart width={400} height={200}>
              <Tooltip content={SocialMediaTooltip} />
              <Pie
                cy="50%"
                cx="50%"
                data={socialMediaData}
                startAngle={0}
                endAngle={360}
                innerRadius={60}
                outerRadius={90}
                dataKey="number"
                stroke="none"
              >
                {socialMediaData.map((entry, index) => (
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
              justifyContent: "space-around",
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
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  backgroundColor: "#06aed4",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "text.main",
                  fontSize: ".9rem",
                }}
              >
                اینستاگرام
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
                  width: 10,
                  height: 10,
                  backgroundColor: "#6366f1",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "text.main",
                  fontSize: ".9rem",
                }}
              >
                لینکدین
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
                  width: 10,
                  height: 10,
                  backgroundColor: "#f79009",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "text.main",
                  fontSize: ".9rem",
                }}
              >
                فیسبوک
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SocialMedia;
