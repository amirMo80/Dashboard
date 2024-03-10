import { Box, Typography } from "@mui/material";

const TrafficTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          width: 160,
          height: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          color: "#fff",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 0.4,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            background: "#111927d0",
            p: 1,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
            {payload[0].payload.name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            height: 0.6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            background: "#111927b0",
            p: 1,
          }}
        >
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#6366f1d9",
                mr: 1,
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "12px" }}
            >{`ارگانیک : ${payload[0].value}`}</Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#ebeefed9",
                mr: 1,
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "12px" }}
            >{`بازاریابی : ${payload[1].value}`}</Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return null;
};

export default TrafficTooltip;
