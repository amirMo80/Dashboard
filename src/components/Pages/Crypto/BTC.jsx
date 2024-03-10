import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ExpandLessRounded, MoreHorizRounded } from "@mui/icons-material";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { grey } from "@mui/material/colors";

import btcIcon from "../../../assets/images/btc.svg";

import { btcData } from "../../../data/btcData";

const BTC = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: 300,
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
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "32px 24px 16px 24px",
        }}
      >
        <Box sx={{ width: 0.8 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "IRANSans-DemiBold",
              fontSize: "1.1rem",
              color: "text.main",
            }}
          >
            0,765
            <Box
              component="span"
              sx={{
                display: isSmDown ? "block" : "inline-block",
                fontFamily: "IRANSans-DemiBold",
                fontSize: isSmDown ? "1rem " : "1.1rem",
                color: "#6c737f",
                pl: isSmDown ? 0 : 1,
              }}
            >
              بیت کوین
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: ".9rem",
              color: "#6c737f",
              mt: 1,
            }}
          >
            16,230,20 $
          </Typography>
        </Box>
        <Box sx={{ width: 0.2 }}>
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
            <MoreHorizRounded sx={{ fontSize: "1.5rem", color: "#6c737f" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 1, height: 100 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={btcData}
            margin={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorNumber" x1="0" y1="0" x2="0" y2="1">
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
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Box
          component="img"
          src={btcIcon}
          sx={{ width: 40, height: 40, mr: 2 }}
        />
        <Box component="span">
          <Typography
            variant="body1"
            sx={{ fontSize: ".9rem", color: "text.main" }}
          >
            BTC/USD
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#10B981",
            }}
          >
            <ExpandLessRounded sx={{ fontSize: "1.2rem" }} />
            <Typography variant="subtitle1" sx={{ fontSize: ".9rem" }}>
              0.56%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BTC;
