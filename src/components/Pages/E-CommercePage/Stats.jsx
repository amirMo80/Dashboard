import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import chart from "../../../assets/images/chart.svg";
import discount from "../../../assets/images/discount.svg";
import tick from "../../../assets/images/tick.svg";



const Stats = () => {
  const [fontSize, setFontSize] = useState(1.4);

  useEffect(() => {
    const stats = document.querySelector(".stats");

    if (stats.clientWidth <= 178) {
      setFontSize(1);
    } else if (stats.clientWidth <= 196) {
      setFontSize(1.2);
    } else {
      setFontSize(1.4);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "16px 16px 32px 16px",
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: "1.1rem",
            color: "text.main",
            mx: 1,
            mb: 2,
          }}
        >
          آمار امروز
        </Typography>
        <Grid
          container
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid xs={12} md={4}>
            <Box
              className="stats"
              sx={{
                m: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                background: "#fef3f2",
                borderRadius: "20px",
                padding: "32px 24px",
              }}
            >
              <Box component="img" src={chart} sx={{ width: 48, height: 48 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  ml: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#6c737f", fontSize: "1rem", mb: 0.5 }}
                >
                  فروش
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 0.4,
                    color: "text.main",
                    fontSize: `${fontSize}rem`,
                    fontFamily: "IRANSans-Bold",
                  }}
                >
                  152 هزار
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Box
              className="stats"
              sx={{
                m: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                background: "#fffaeb",
                borderRadius: "20px",
                padding: "32px 24px",
              }}
            >
              <Box
                component="img"
                src={discount}
                sx={{ width: 48, height: 48 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  ml: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#6c737f", fontSize: "1rem", mb: 0.5 }}
                >
                  هزینه
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 0.4,
                    color: "text.main",
                    fontSize: `${fontSize}rem`,
                    fontFamily: "IRANSans-Bold",
                  }}
                >
                  99 هزار
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Box
              className="stats"
              sx={{
                m: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                background: "#f0fdf9",
                borderRadius: "20px",
                padding: "32px 24px",
              }}
            >
              <Box component="img" src={tick} sx={{ width: 48, height: 48 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  ml: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#6c737f", fontSize: "1rem", mb: 0.5 }}
                >
                  سود
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 0.4,
                    color: "text.main",
                    fontSize: `${fontSize}rem`,
                    fontFamily: "IRANSans-Bold",
                  }}
                >
                  32 هزار
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Stats;
